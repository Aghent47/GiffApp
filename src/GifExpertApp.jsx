import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Moon, Sun, Search, Sparkles } from 'lucide-react';
import { Addcategory as AddCategory } from './components/AddCategory';
import { GifGrid } from './components/GifGrid';

export const GifExpertApp = () => {
    /* Hooks */
    const [categories, setCategories] = useState(['One Punch']);
    const [isDarkMode, setIsDarkMode] = useState(true);

    const onAddCategory = (newCategory) => {
        if (categories.includes(newCategory)) return;
        setCategories([newCategory, ...categories]);
    };

    const toggleTheme = () => {
        const newTheme = isDarkMode ? 'light' : 'dark';
        setIsDarkMode(!isDarkMode);
        document.documentElement.setAttribute('data-theme', newTheme);
        
        // Add smooth transition effect
        document.body.style.transition = 'background-color 0.3s ease, color 0.3s ease';
        setTimeout(() => {
            document.body.style.transition = '';
        }, 300);
    };

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
        hidden: { y: 20, opacity: 0 },
        visible: {
            y: 0,
            opacity: 1,
            transition: {
                duration: 0.6,
                ease: "easeOut"
            }
        }
    };

    return (
        <div className="app-container">
            {/* Theme Toggle */}
            <motion.button
                className="theme-toggle"
                onClick={toggleTheme}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ delay: 0.5, duration: 0.3 }}
                aria-label="Toggle theme"
            >
                {isDarkMode ? <Sun size={20} /> : <Moon size={20} />}
            </motion.button>

            <div className="app-content">
                <motion.div
                    className="app-header"
                    variants={containerVariants}
                    initial="hidden"
                    animate="visible"
                >
                    <motion.h1 
                        className="app-title"
                        variants={itemVariants}
                    >
                        <Sparkles className="inline-block mr-3" size={48} />
                        GifExpertApp
                    </motion.h1>
                    <motion.p 
                        className="app-subtitle"
                        variants={itemVariants}
                    >
                        Discover amazing GIFs with our intelligent search
                    </motion.p>
                </motion.div>

                {/* Search Component */}
                <motion.div 
                    className="search-container"
                    variants={itemVariants}
                >
                    <AddCategory onNewCategory={onAddCategory} />
                </motion.div>

                {/* Gif Categories */}
                <AnimatePresence mode="wait">
                    {categories.map((category, index) => (
                        <motion.div
                            key={category}
                            className="category-section"
                            variants={itemVariants}
                            initial="hidden"
                            animate="visible"
                            exit={{ opacity: 0, y: -20 }}
                            transition={{ delay: index * 0.1 }}
                        >
                            <GifGrid category={category} />
                        </motion.div>
                    ))}
                </AnimatePresence>
            </div>
        </div>
    );
};
