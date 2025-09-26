import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Heart, Download, Share2, Eye, Play } from 'lucide-react';
import PropTypes from 'prop-types';

export const GifItem = ({ title, url, id }) => {
  const [isHovered, setIsHovered] = useState(false);
  const [isLiked, setIsLiked] = useState(false);
  const [imageLoaded, setImageLoaded] = useState(false);

  const handleLike = (e) => {
    e.stopPropagation();
    setIsLiked(!isLiked);
  };

  const handleDownload = (e) => {
    e.stopPropagation();
    // In a real app, you would implement download functionality
    console.log('Downloading:', title);
  };

  const handleShare = (e) => {
    e.stopPropagation();
    // In a real app, you would implement share functionality
    if (navigator.share) {
      navigator.share({
        title: title,
        url: url
      });
    } else {
      navigator.clipboard.writeText(url);
    }
  };

  const cardVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 20
    },
    visible: {
      opacity: 1,
      scale: 1,
      y: 0,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    },
    hover: {
      scale: 1.02,
      y: -8,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  const overlayVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.2 }
    }
  };

  const buttonVariants = {
    hidden: { 
      opacity: 0, 
      scale: 0.8,
      y: 10
    },
    visible: { 
      opacity: 1, 
      scale: 1,
      y: 0,
      transition: {
        duration: 0.2,
        ease: "easeOut"
      }
    }
  };

  return (
    <motion.div
      className="gif-card"
      variants={cardVariants}
      initial="hidden"
      animate="visible"
      whileHover="hover"
      onHoverStart={() => setIsHovered(true)}
      onHoverEnd={() => setIsHovered(false)}
      layout
    >
      <div className="gif-image-container">
        {!imageLoaded && (
          <motion.div
            className="loading-skeleton"
            style={{
              position: 'absolute',
              top: 0,
              left: 0,
              right: 0,
              bottom: 0,
              zIndex: 1
            }}
            animate={{
              backgroundPosition: ['0% 0%', '100% 0%', '0% 0%']
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "linear"
            }}
          />
        )}
        
        <motion.img
          src={url}
          alt={title}
          className="gif-image"
          onLoad={() => setImageLoaded(true)}
          initial={{ opacity: 0 }}
          animate={{ 
            opacity: imageLoaded ? 1 : 0,
            scale: isHovered ? 1.1 : 1
          }}
          transition={{ duration: 0.3 }}
          whileHover={{ scale: 1.1 }}
        />

        {/* Hover Overlay */}
        <motion.div
          className="gif-overlay"
          variants={overlayVariants}
          initial="hidden"
          animate={isHovered ? "visible" : "hidden"}
        >
          <motion.div className="gif-actions">
            <motion.button
              className={`action-button ${isLiked ? 'liked' : ''}`}
              onClick={handleLike}
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label={isLiked ? 'Unlike' : 'Like'}
            >
              <Heart 
                size={18} 
                fill={isLiked ? 'currentColor' : 'none'}
              />
            </motion.button>

            <motion.button
              className="action-button"
              onClick={handleDownload}
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Download"
            >
              <Download size={18} />
            </motion.button>

            <motion.button
              className="action-button"
              onClick={handleShare}
              variants={buttonVariants}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
              aria-label="Share"
            >
              <Share2 size={18} />
            </motion.button>
          </motion.div>

          <motion.div 
            className="gif-play-indicator"
            variants={buttonVariants}
          >
            <Play size={24} />
          </motion.div>
        </motion.div>

        {/* Loading Indicator */}
        {!imageLoaded && (
          <motion.div
            className="loading-indicator"
            animate={{ rotate: 360 }}
            transition={{
              duration: 1,
              repeat: Infinity,
              ease: "linear"
            }}
          >
            <div className="loading-spinner" />
          </motion.div>
        )}
      </div>

      <motion.div 
        className="gif-title"
        animate={{
          color: isHovered ? 'var(--accent-primary)' : 'var(--text-primary)'
        }}
        transition={{ duration: 0.2 }}
      >
        {title}
      </motion.div>

      {/* Gradient Overlay for better text readability */}
      <motion.div
        className="gif-gradient-overlay"
        variants={overlayVariants}
        initial="hidden"
        animate={isHovered ? "visible" : "hidden"}
      />
    </motion.div>
  );
};

GifItem.propTypes = {
  title: PropTypes.string.isRequired,
  url: PropTypes.string.isRequired,
  id: PropTypes.string.isRequired,
};
