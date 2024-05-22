// script.js
// script.js
document.addEventListener('DOMContentLoaded', () => {
    const burger = document.querySelector('.burger');
    const navLinks = document.querySelector('.nav-links');

    burger.addEventListener('click', () => {
        navLinks.classList.toggle('active');
    });

 
    
    // Fonction pour interpeller entre deux couleurs
    function interpolateColor(color1, color2, factor) {
        const result = color1.slice();
        for (let i = 0; i < 3; i++) {
            result[i] = Math.round(result[i] + factor * (color2[i] - color1[i]));
        }
        return result;
    }

    // document.addEventListener('DOMContentLoaded', () => {
    //     const dropelt = document.querySelector('.dropbtn');
    //     const eltserv = document.querySelector('.dropdown-content');
    
    //     dropelt.addEventListener('click', () => {
    //         eltserv.classList.toggle('active');
    //     });
    // });

    // Convertir une couleur en format rgb array
    function colorToRgb(color) {
        if (color[0] === '#') {
            color = color.slice(1);
        }
        if (color.length === 3) {
            color = color.split('').map(char => char + char).join('');
        }
        const bigint = parseInt(color, 16);
        return [bigint >> 16 & 255, bigint >> 8 & 255, bigint & 255];
    }

    // Convertir un rgb array en format css rgb
    function rgbToCss(rgb) {
        return `rgb(${rgb[0]}, ${rgb[1]}, ${rgb[2]})`;
    }

    // Couleurs de début et de fin
    const startColor = colorToRgb('#ffe5b4'); // orange foncé
    const endColor = colorToRgb('#ec9c67');   // orange clair

    window.addEventListener('scroll', () => {
        const scrollTop = window.scrollY;
        const docHeight = document.documentElement.scrollHeight - window.innerHeight;
        const scrollPercent = scrollTop / docHeight;

        const newColor = interpolateColor(startColor, endColor, scrollPercent);
        document.body.style.backgroundColor = rgbToCss(newColor);


    });
});


// JavaScript pour activer le carrousel de clients

    // Récupérer les éléments de produits
    const products = document.querySelectorAll('.product');
    const productDescription = document.getElementById('product-description');

    products.forEach(function(product) {
        product.addEventListener('click', function() {
            const description = product.getAttribute('data-description');
            productDescription.textContent = description;
        });
    });

    // Fonction pour basculer la visibilité du menu déroulant
    function toggleDropdown() {
        servicesDropdownContent.classList.toggle('active');
    }

    // Écouteur d'événement pour le clic sur le bouton "Services"
    servicesDropdown.addEventListener('click', (event) => {
        event.preventDefault(); // Empêche le comportement par défaut du lien
        toggleDropdown();
    });

    // Écouteur d'événement pour fermer le menu déroulant si l'utilisateur clique en dehors de celui-ci
    window.addEventListener('click', (event) => {
        if (!event.target.matches('.dropbtn')) {
            if (servicesDropdownContent.classList.contains('active')) {
                toggleDropdown();
            }
        } 
    })




    document.addEventListener('DOMContentLoaded', () => {
        const produits = document.querySelectorAll('.produit');
    
        produits.forEach(produit => {
            produit.addEventListener('mouseover', () => {
                produit.classList.add('hovered');
            });
    
            produit.addEventListener('mouseout', () => {
                produit.classList.remove('hovered');
            });
        });
    });
    

