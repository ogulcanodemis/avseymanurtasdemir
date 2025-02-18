import React, { useState, useEffect } from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import { useParams, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faArrowLeft } from '@fortawesome/free-solid-svg-icons';
import axios from 'axios';
import AOS from 'aos';
import CustomNavbar from '../Components/CustomNavbar';
import Footer from '../Components/Footer';
import './SingleBlog.css';

const SingleBlog = () => {
    const [blog, setBlog] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);
    const { id } = useParams();
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await axios.get(`https://avseymanurtasdemir.com/backend/api/get_blog.php?id=${id}`);
                if (response.data.success) {
                    setBlog(response.data.data);
                    document.title = `${response.data.data.title} - Av. Seymanur Taşdemir`;
                } else {
                    setError('Blog yazısı bulunamadı.');
                }
            } catch (error) {
                setError('Blog yazısı yüklenirken bir hata oluştu.');
                console.error('Blog detayı çekilirken hata oluştu:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchBlog();
        AOS.init({
            duration: 1000,
            once: true
        });

        window.scrollTo(0, 0);

        return () => {
            document.title = 'Av. Seymanur Taşdemir';
        };
    }, [id]);

    const handleBack = () => {
        navigate(-1);
    };

    if (loading) {
        return (
            <div className="page-wrapper">
                <CustomNavbar />
                <Container className="py-5">
                    <div className="text-center">
                        <div className="spinner-border text-gold" role="status">
                            <span className="visually-hidden">Yükleniyor...</span>
                        </div>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }

    if (error || !blog) {
        return (
            <div className="page-wrapper">
                <CustomNavbar />
                <Container className="py-5">
                    <div className="text-center">
                        <h2>{error || 'Blog yazısı bulunamadı.'}</h2>
                        <button 
                            className="btn btn-gold mt-3"
                            onClick={handleBack}
                        >
                            <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                            Geri Dön
                        </button>
                    </div>
                </Container>
                <Footer />
            </div>
        );
    }

    return (
        <div className="page-wrapper">
            <CustomNavbar />
            <div className="single-blog-page mt-5">
                <Container>
                    <Row className="justify-content-center">
                        <Col lg={10}>
                            <div className="blog-header text-center mb-4" data-aos="fade-up">

                                <h1 className="blog-title">{blog.title}</h1>
                                <div className="blog-meta">
                                    <FontAwesomeIcon icon={faCalendar} className="me-2" />
                                    {new Date(blog.created_at).toLocaleDateString('tr-TR', {
                                        year: 'numeric',
                                        month: 'long',
                                        day: 'numeric'
                                    })}
                                </div>
                            </div>

                            {blog.image_url && (
                                <div className="blog-featured-image mb-4" data-aos="fade-up">
                                    <img
                                        src={blog.image_url}
                                        alt={blog.title}
                                        className="img-fluid"
                                    />
                                </div>
                            )}

                            <div 
                                className="blog-content"
                                data-aos="fade-up"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                                                    <button 
                                    className="btn btn-outline-gold mb-4"
                                    onClick={handleBack}
                                >
                                    <FontAwesomeIcon icon={faArrowLeft} className="me-2" />
                                    Geri Dön
                                </button>
                        </Col>

                    </Row>
                </Container>
            </div>
            <Footer />
        </div>
    );
};

export default SingleBlog; 