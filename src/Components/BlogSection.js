import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Modal } from 'react-bootstrap';
import { Link, useNavigate } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar, faArrowRight } from '@fortawesome/free-solid-svg-icons';
import Slider from 'react-slick';
import axios from 'axios';
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import AOS from 'aos';
import './BlogSection.css';

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [posts, setPosts] = useState([]);
  const [loading, setLoading] = useState(true);
  const [isMobile, setIsMobile] = useState(window.innerWidth <= 768);
  const navigate = useNavigate();

  useEffect(() => {
    const fetchBlogs = async () => {
      try {
        const response = await axios.get('https://avseymanurtasdemir.com/backend/api/get_blogs_final.php');
        if (response.data.success) {
          setPosts(response.data.data);
        }
      } catch (error) {
        console.error('Blog verileri çekilirken hata oluştu:', error);
      } finally {
        setLoading(false);
      }
    };

    fetchBlogs();
    
    // Pencere boyutu değiştiğinde mobil/masaüstü durumunu güncelle
    const handleResize = () => {
      setIsMobile(window.innerWidth <= 768);
    };
    
    window.addEventListener('resize', handleResize);
    
    AOS.init({
      duration: 1000,
      once: true
    });
    
    // Cleanup listener
    return () => {
      window.removeEventListener('resize', handleResize);
    };
  }, []);

  const handlePostClick = (post) => {
    setSelectedPost(post);
    setShowModal(true);
  };

  const handleReadMore = (postId, e) => {
    e.preventDefault();
    navigate(`/blog/${postId}`);
  };

  const sliderSettings = {
    dots: true,
    infinite: posts.length > 1,
    speed: 500,
    slidesToShow: posts.length >= 3 ? 3 : posts.length,
    slidesToScroll: 1,
    autoplay: posts.length > 1,
    autoplaySpeed: 3000,
    arrows: posts.length > 1,
    responsive: [
      {
        breakpoint: 992,
        settings: {
          slidesToShow: posts.length >= 2 ? 2 : posts.length,
          slidesToScroll: 1,
          arrows: posts.length > 1
        }
      },
      {
        breakpoint: 576,
        settings: {
          slidesToShow: 1,
          slidesToScroll: 1,
          arrows: posts.length > 1
        }
      }
    ]
  };

  const renderBlogCards = () => {
    return (
      <Row className="blog-cards-container">
        {posts.map((post) => (
          <Col lg={4} md={6} sm={12} key={post.id} className="mb-4">
            <div className="blog-item" onClick={() => handlePostClick(post)}>
              {post.image_url && (
                <div className="blog-image">
                  <img src={post.image_url} alt={post.title} className="w-100" />
                </div>
              )}
              <div className="blog-content">
                <div className="blog-date">
                  <FontAwesomeIcon icon={faCalendar} className="me-2" />
                  {new Date(post.created_at).toLocaleDateString('tr-TR')}
                </div>
                <h3 className="blog-title">{post.title}</h3>
                <p className="blog-excerpt">
                  {post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                </p>
                <a 
                  href={`/blog/${post.id}`} 
                  className="blog-read-more"
                  onClick={(e) => handleReadMore(post.id, e)}
                >
                  Devamını Oku <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                </a>
              </div>
            </div>
          </Col>
        ))}
      </Row>
    );
  };

  if (loading) {
    return (
      <section className="blog-section py-5">
        <Container>
          <div className="text-center">
            <div className="spinner-border" role="status">
              <span className="visually-hidden">Yükleniyor...</span>
            </div>
          </div>
        </Container>
      </section>
    );
  }

  if (posts.length === 0) {
    return (
      <section className="blog-section py-5">
        <Container>
          <div className="text-center">
            <h2>Henüz blog yazısı bulunmamaktadır.</h2>
          </div>
        </Container>
      </section>
    );
  }

  return (
    <section className="blog-section py-5">
      <Container>
        <div className="section-header text-center mb-5">
          <h2 className="section-title" data-aos="fade-up">GÜNCEL BLOG YAZILARIMIZ</h2>
          <div className="section-divider"></div>
        </div>

        {/* Blog sayısı 3'ten fazla ise hem mobilde hem masaüstünde slider gösteriyoruz */}
        {posts.length > 3 ? (
          <div className="blog-slider" data-aos="fade-up">
            <Slider {...sliderSettings}>
              {posts.map((post) => (
                <div key={post.id} className="px-2">
                  <div className="blog-item" onClick={() => handlePostClick(post)}>
                    {post.image_url && (
                      <div className="blog-image">
                        <img
                          src={post.image_url}
                          alt={post.title}
                          className="w-100"
                        />
                      </div>
                    )}
                    <div className="blog-content">
                      <div className="blog-date">
                        <FontAwesomeIcon icon={faCalendar} className="me-2" />
                        {new Date(post.created_at).toLocaleDateString('tr-TR')}
                      </div>
                      <h3 className="blog-title">{post.title}</h3>
                      <p className="blog-excerpt">
                        {post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                      </p>
                      <a 
                        href={`/blog/${post.id}`} 
                        className="blog-read-more"
                        onClick={(e) => handleReadMore(post.id, e)}
                      >
                        Devamını Oku <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                      </a>
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        ) : (
          /* Blog sayısı 3 veya daha az ise: mobilde tek blog için özel görünüm, çoklu blog için uygun görünüm */
          isMobile ? (
            posts.length === 1 ? (
              <div className="single-blog-container" data-aos="fade-up">
                {renderBlogCards()}
              </div>
            ) : (
              <div className="blog-slider" data-aos="fade-up">
                <Slider {...sliderSettings}>
                  {posts.map((post) => (
                    <div key={post.id} className="px-2">
                      <div className="blog-item" onClick={() => handlePostClick(post)}>
                        {post.image_url && (
                          <div className="blog-image">
                            <img
                              src={post.image_url}
                              alt={post.title}
                              className="w-100"
                            />
                          </div>
                        )}
                        <div className="blog-content">
                          <div className="blog-date">
                            <FontAwesomeIcon icon={faCalendar} className="me-2" />
                            {new Date(post.created_at).toLocaleDateString('tr-TR')}
                          </div>
                          <h3 className="blog-title">{post.title}</h3>
                          <p className="blog-excerpt">
                            {post.content.replace(/<[^>]*>/g, '').substring(0, 100)}...
                          </p>
                          <a 
                            href={`/blog/${post.id}`} 
                            className="blog-read-more"
                            onClick={(e) => handleReadMore(post.id, e)}
                          >
                            Devamını Oku <FontAwesomeIcon icon={faArrowRight} className="ms-2" />
                          </a>
                        </div>
                      </div>
                    </div>
                  ))}
                </Slider>
              </div>
            )
          ) : (
            renderBlogCards()
          )
        )}

        <Modal
          show={showModal}
          onHide={() => setShowModal(false)}
          size="lg"
          centered
          className="blog-modal"
        >
          <Modal.Header closeButton>
            <Modal.Title>{selectedPost?.title}</Modal.Title>
          </Modal.Header>
          <Modal.Body>
            {selectedPost?.image_url && (
              <div className="blog-modal-image mb-4">
                <img
                  src={selectedPost.image_url}
                  alt={selectedPost.title}
                  className="w-100"
                />
              </div>
            )}
            <div className="blog-modal-date mb-3">
              <FontAwesomeIcon icon={faCalendar} className="me-2" />
              {selectedPost && new Date(selectedPost.created_at).toLocaleDateString('tr-TR')}
            </div>
            <div 
              className="blog-modal-content"
              dangerouslySetInnerHTML={{ __html: selectedPost?.content }} 
            />
          </Modal.Body>
        </Modal>
      </Container>
    </section>
  );
};

export default BlogSection; 