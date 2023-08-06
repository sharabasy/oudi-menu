import project1Cover from '../assets/images/Modern React eCommerce Application for Furniture Stores(cover).png';
import project1Image1 from '../assets/images/Modern React eCommerce Application for Furniture Stores.png';

import FlutterEbook from '../assets/images/FlutterEbook.jpeg';

import InteriorDecorationDesignAppCover from '../assets/images/Interior Decoration Design App(cover).jpeg';
import InteriorDecorationDesignAppImage1 from '../assets/images/Interior Decoration Design App.jpeg';

// import ECommerceCover from '../assets/images/E-commerce Application(cover).jpeg';
import ECommerceImage1 from '../assets/images/E-commerce Application.jpeg';

import FoodDeliveryCover from '../assets/images/Food Delivery(cover).jpeg';
import FoodDeliveryImage1 from '../assets/images/Food Delivery.jpeg';

const portfolioItems = [
    {
        id: 1,
        backgroundColor: '#f7b267',
        coverImage: project1Cover,
        title: 'Modern React eCommerce Application for Furniture Stores',
        description: 'It is a dynamic and visually appealing eCommerce application built using React, designed specifically for furniture stores and creative professionals. It offers a seamless and user-friendly shopping experience for customers, while providing a powerful platform for businesses to showcase their products and services.',
        technologies: ['react', 'nodejs', 'mongodb'],
        projectImages : [
            project1Image1,
        ],
        platform: 'web'
    },
    {
        id: 2,
        backgroundColor: '#f79d65',
        coverImage: FlutterEbook,
        title: 'Flutter Ebook Application',
        description: 'The comprehensive ebook application that brings your favorite literary worlds to your fingertips. Dive into a vast collection of digital books, magazines, and comics with a user-friendly interface, providing an immersive reading experience like never before.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        projectImages : [
            FlutterEbook,
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        platform: 'mobile'
    },
    {
        id: 3,
        backgroundColor: '#f4845f',
        coverImage: InteriorDecorationDesignAppCover,
        title: 'Interior Decoration Design App',
        description: 'The ultimate interior design app that brings you a seamless shopping experience with a variety of essential screens to cater to all your needs. With a user-friendly interface and powerful features, FlutterShop is here to revolutionize your online shopping journey.',
        technologies: ['figma'],
        projectImages : [
            InteriorDecorationDesignAppImage1,
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        platform: 'mobile'
    },
    {
        id: 4,
        backgroundColor: '#f27059',
        coverImage: ECommerceImage1,
        title: 'E-commerce Application',
        description: 'The ultimate all-in-one e-commerce app that brings you a seamless shopping experience with a variety of essential screens to cater to all your needs. With a user-friendly interface and powerful features, FlutterShop is here to revolutionize your online shopping journey.',
        technologies: ['flutter', 'dart','mongodb'],
        projectImages : [
            ECommerceImage1,
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        platform: 'mobile'
    },
    {
        id: 5,
        backgroundColor: '#f25c54',
        coverImage: FoodDeliveryCover,
        title: 'Food Delivery Application',
        description: 'Your go-to food delivery app designed to bring a delectable selection of cuisines right to your doorstep. With a user-friendly interface and an array of features,this appliction guarantees a convenient and delightful dining experience like never before.',
        technologies: ['Flutter', 'Dart', 'Firebase'],
        projectImages : [
            FoodDeliveryImage1,
            'https://via.placeholder.com/300',
            'https://via.placeholder.com/300',
        ],
        platform: 'mobile'
    }
    // Add more portfolio items as needed...
];

export default portfolioItems;