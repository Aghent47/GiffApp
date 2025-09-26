import { motion, AnimatePresence } from "framer-motion";
import { GifItem } from "./GifItem";
import { useFetchGifs } from "../hooks/useFetchGifs";
import PropTypes from 'prop-types';

export const GifGrid = ({ category }) => {
  const { images, isLoading } = useFetchGifs(category);
  
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.2
      }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0, scale: 0.9 },
    visible: {
      y: 0,
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.5,
        ease: "easeOut"
      }
    }
  };

  const loadingVariants = {
    hidden: { opacity: 0, scale: 0.8 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: {
        duration: 0.3,
        ease: "easeOut"
      }
    }
  };

  const LoadingSkeleton = () => (
    <motion.div
      className="loading-skeleton"
      style={{
        height: '200px',
        width: '100%',
        borderRadius: 'var(--radius-xl)',
        marginBottom: 'var(--space-4)'
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
  );

  const GeometricLoader = () => (
    <motion.div
      className="loading-container"
      variants={loadingVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.div
        className="loading-geometric"
        animate={{
          rotate: [0, 360],
          scale: [1, 1.1, 1]
        }}
        transition={{
          duration: 2,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        <div className="geometric-circle" />
        <div className="geometric-square" />
        <div className="geometric-triangle" />
      </motion.div>
      <motion.p
        className="loading-text"
        animate={{
          opacity: [0.5, 1, 0.5]
        }}
        transition={{
          duration: 1.5,
          repeat: Infinity,
          ease: "easeInOut"
        }}
      >
        Loading amazing GIFs...
      </motion.p>
    </motion.div>
  );

  return (
    <motion.div
      className="category-section"
      variants={containerVariants}
      initial="hidden"
      animate="visible"
    >
      <motion.h3 
        className="category-title"
        variants={itemVariants}
        whileHover={{ scale: 1.05 }}
        transition={{ duration: 0.2 }}
      >
        {category}
      </motion.h3>

      <AnimatePresence mode="wait">
        {isLoading ? (
          <motion.div
            key="loading"
            variants={loadingVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0, scale: 0.8 }}
            transition={{ duration: 0.3 }}
          >
            <GeometricLoader />
            <div className="gif-grid">
              {[...Array(6)].map((_, index) => (
                <LoadingSkeleton key={index} />
              ))}
            </div>
          </motion.div>
        ) : (
          <motion.div
            key="content"
            className="gif-grid"
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
          >
            <AnimatePresence>
              {images.map((image, index) => (
                <motion.div
                  key={image.id}
                  variants={itemVariants}
                  layout
                  whileHover={{ 
                    scale: 1.05,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.95 }}
                  initial="hidden"
                  animate="visible"
                  exit={{ 
                    opacity: 0, 
                    scale: 0.8,
                    transition: { duration: 0.2 }
                  }}
                  transition={{ 
                    delay: index * 0.05,
                    duration: 0.4,
                    ease: "easeOut"
                  }}
                >
                  <GifItem {...image} />
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.div>
  );
};

GifGrid.propTypes = {
  category: PropTypes.string.isRequired,
};