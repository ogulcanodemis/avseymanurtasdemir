import React, { useState, useEffect } from 'react';
import { Container, Row, Col, Card } from 'react-bootstrap';
import { Link } from 'react-router-dom';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faCalendar } from '@fortawesome/free-solid-svg-icons';
import AOS from 'aos';
import 'aos/dist/aos.css';

const BlogList = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true
    });
    fetchPosts();
  }, []);

  const fetchPosts = async () => {
    try {
      const response = await fetch('http://localhost:5000/api/posts');
      const data = await response.json();
      setPosts(data);
    } catch (err) {
      console.error('Blog yazıları yüklenirken hata oluştu:', err);
    }
  };

  return (
    <div className="blog-section py-5">
      <Container>
        <h2 className="text-center mb-5" data-aos="fade-up">Blog Yazıları</h2>
        <Row>
          {posts.map((post) => (
            <Col md={4} key={post.id} className="mb-4" data-aos="fade-up">
              <Card className="h-100 shadow-sm">
                {post.image_url && (
                  <Card.Img 
                    variant="top" 
                    src={post.image_url} 
                    alt={post.title}
                    style={{ height: '200px', objectFit: 'cover' }}
                  />
                )}
                <Card.Body>
                  <Card.Title className="mb-3">{post.title}</Card.Title>
                  <div className="text-muted mb-3">
                    <FontAwesomeIcon icon={faCalendar} className="me-2" />
                    {new Date(post.created_at).toLocaleDateString('tr-TR')}
                  </div>
                  <Card.Text>
                    {post.content.replace(/<[^>]*>/g, '').substring(0, 150)}...
                  </Card.Text>
                  <Link 
                    to={`/blog/${post.id}`} 
                    className="btn btn-outline-primary"
                  >
                    Devamını Oku
                  </Link>
                </Card.Body>
              </Card>
            </Col>
          ))}
        </Row>
      </Container>
    </div>
  );
};

export default BlogList; 