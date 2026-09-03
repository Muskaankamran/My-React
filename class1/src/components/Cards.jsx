import React from 'react'
import Card from './Card'
const Cards = () => {
    let countries = [
        {

            name: "Paris, France",
            image: "https://images.unsplash.com/photo-1502602898657-3e91760cbb34?w=800",
            description:
                "The City of Light dazzles with iconic landmarks like the Eiffel Tower, world-class art at the Louvre, and charming cafés lining the Seine.",
        },
        {

            name: "Kyoto, Japan",
            image: "https://images.unsplash.com/photo-1493976040374-85c8e12f0c0e?w=800",
            description:
                "Ancient temples, serene bamboo groves, and traditional geisha districts make Kyoto a timeless escape into Japanese heritage.",
        },
        {

            name: "Santorini, Greece",
            image: "https://images.unsplash.com/photo-1570077188670-e3a8d69ac5ff?w=800",
            description:
                "Whitewashed buildings, blue-domed churches, and breathtaking sunsets over the Aegean Sea make this island a dream destination.",
        },
        {

            name: "Machu Picchu, Peru",
            image: "https://images.unsplash.com/photo-1526392060635-9d6019884377?w=800",
            description:
                "This ancient Incan citadel sits high in the Andes Mountains, offering breathtaking views and a glimpse into a lost civilization.",
        },
        {

            name: "Bali, Indonesia",
            image: "https://images.unsplash.com/photo-1537996194471-e657df975ab4?w=800",
            description:
                "Lush rice terraces, sacred temples, and pristine beaches combine to create a tropical paradise for relaxation and adventure.",
        },
        {

            name: "New York City, USA",
            image: "https://images.unsplash.com/photo-1496442226666-8d4d0e62e6e9?w=800",
            description:
                "The city that never sleeps offers iconic skylines, Broadway shows, world-class museums, and a melting pot of cultures.",
        },
        {

            name: "Cape Town, South Africa",
            image: "https://images.unsplash.com/photo-1580060839134-75a50c8c3a97?w=800",
            description:
                "Nestled between Table Mountain and the Atlantic Ocean, Cape Town offers dramatic landscapes, vineyards, and rich cultural history.",
        },
        {

            name: "Dubai, UAE",
            image: "https://images.unsplash.com/photo-1512453979798-5ea266f8880c?w=800",
            description:
                "A futuristic desert city known for record-breaking skyscrapers, luxury shopping, and man-made islands shaped like palm trees.",
        },
        {

            name: "Sydney, Australia",
            image: "https://images.unsplash.com/photo-1506973035872-a4ec16b8e8d9?w=800",
            description:
                "Home to the world-famous Opera House and Harbour Bridge, Sydney blends stunning coastline with a vibrant urban culture.",
        },
        {

            name: "Marrakech, Morocco",
            image: "https://images.unsplash.com/photo-1489493887464-892be6d1daae?w=800",
            description:
                "A vibrant maze of souks, palaces, and gardens, Marrakech immerses visitors in colors, spices, and centuries of history.",
        },
    ];
    return (
        <div className="container">

            <div className="row row-cols-1 row-cols-md-3 g-4">

                {
                    countries.map((country) => {
                        return
         <Card name={country.name} image={country.image} description={country.description} />
                    })
                }
            </div>
        </div>
    )

}

export default Cards