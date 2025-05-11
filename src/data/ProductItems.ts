
import Avatar_1 from "../assets/avatar/diego-hernandez-MSepzbKFz10-unsplash.jpg";
import Avatar_2 from "../assets/avatar/jake-nackos-IF9TK5Uy-KI-unsplash.jpg";
import Avatar_3 from "../assets/avatar/vicky-hladynets-C8Ta0gwPbQg-unsplash.jpg";

import Image_1 from "../assets/campaign-creators-qCi_MzVODoU-unsplash.jpg";
import Image_2 from "../assets/kobu-agency-7okkFhxrxNw-unsplash.jpg";
import Image_3 from "../assets/patrick-tomasso-fMntI8HAAB8-unsplash.jpg";

interface CardProductItem {
    image: string
    category: string
    readTime: string
    title: string
    author: {
        name: string
        avatar: string
        postedAt: string
    }
}

const cardProductItems: CardProductItem[] = [
    {
        image: Image_1,
        category: "Marketing",
        readTime: "3 min read",
        title: "How to Craft a Powerful Marketing Strategy for Your Startup",
        author: {
            name: "Amanda H.",
            avatar: Avatar_1,
            postedAt: "4 days ago"
        }
    },
    {
        image: Image_2,
        category: "Social Media",
        readTime: "5 min read",
        title: "Top 10 Social Media Trends to Watch in 2025",
        author: {
            name: "James K.",
            avatar: Avatar_2,
            postedAt: "1 week ago"
        }
    },
    {
        image: Image_3,
        category: "Design",
        readTime: "2 min read",
        title: "Why Minimalist Design is Dominating Modern UX Strategies",
        author: {
            name: "Sophie L.",
            avatar: Avatar_3,
            postedAt: "1 week ago"
        }
    },
];

export default cardProductItems;   