import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";
/**
 * User Database can be added here.
 * You can add default users of your wish with different attributes
 * */

export const users = [
  {
    _id: 101,
    firstName: "Adarsh",
    lastName: "User",
    username: "adarshuserhu",
    password: "adarshUser123",
    userHandler: "adarshuser24",
    bio: "let Go",
    following: [],
    followers: [],
    bookmarks: [],
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 102,
    firstName: "Prince",
    lastName: "Raj",
    username: "princeraj",
    // email: "princeraj@gmail.com",
    following: [
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
      {
        _id: 104,
        fullName: "Jane Smith",
        username: "janes",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262408/cld-sample.jpg ",
      },
      {
        _id: 105,
        fullName: "David Johnson",
        username: "dadidj",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262391/samples/people/smiling-man.jpg  ",
      },
      {
        _id: 106,
        fullName: "Emily Brown",
        username: "emilyb",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264107/stefan-stefancik-QXevDflbl8A-unsplash_wmnmqq.jpg ",
      },
      {
        _id: 107,
        fullName: "Michael Wilson",
        username: "michaelw",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264093/irene-strong-v2aKnjMbP_k-unsplash_p124aq.jpg ",
      },
      {
        _id: 108,
        fullName: "Sophia Jones",
        username: "sophiaj",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/michael-dam-mEZ3PoFGs_k-unsplash_zh0wjy.jpg ",
      },
      {
        _id: 109,
        fullName: "William Davis",
        username: "williamd",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264093/ian-dooley-d1UPkiFd04A-unsplash_z2bp6m.jpg ",
      },
      {
        _id: 110,
        fullName: "Mia Clark",
        username: "miacl",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264095/ayo-ogunseinde-6W4F62sN_yI-unsplash_vlsdey.jpg ",
      },
      {
        _id: 111,
        fullName: "Daniel Miller",
        username: "danielm",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/charlie-green-3JmfENcL24M-unsplash_jy1aao.jpg ",
      },
      {
        _id: 112,
        fullName: "Ava Taylor",
        username: "avat",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/alexandru-zdrobau-BGz8vO3pK8k-unsplash_xjds37.jpg ",
      },
      {
        _id: 113,
        fullName: "Liam Anderson",
        username: "liama",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264094/kirill-balobanov-2rIs8OH5ng0-unsplash_kyzydt.jpg ",
      },
    ],
    bookmarks: [],
    profilePicture:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
    bio: "Astrologer 🔯 Developer 👨‍💻 Fitness Freak",
    password: "12345",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: 103,
    firstName: "Sarahana",
    lastName: "Singh",
    username: "kittuaa",
    password: "password123",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
    ],
    followers: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 104,
        fullName: "Jane Smith",
        username: "janes",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262408/cld-sample.jpg ",
      },
      {
        _id: 105,
        fullName: "David Johnson",
        username: "dadidj",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262391/samples/people/smiling-man.jpg  ",
      },
      {
        _id: 106,
        fullName: "Emily Brown",
        username: "emilyb",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264107/stefan-stefancik-QXevDflbl8A-unsplash_wmnmqq.jpg ",
      },
      {
        _id: 107,
        fullName: "Michael Wilson",
        username: "michaelw",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264093/irene-strong-v2aKnjMbP_k-unsplash_p124aq.jpg ",
      },
      {
        _id: 108,
        fullName: "Sophia Jones",
        username: "sophiaj",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/michael-dam-mEZ3PoFGs_k-unsplash_zh0wjy.jpg ",
      },
      {
        _id: 109,
        fullName: "William Davis",
        username: "williamd",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264093/ian-dooley-d1UPkiFd04A-unsplash_z2bp6m.jpg ",
      },
      {
        _id: 110,
        fullName: "Mia Clark",
        username: "miacl",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264095/ayo-ogunseinde-6W4F62sN_yI-unsplash_vlsdey.jpg ",
      },
      {
        _id: 111,
        fullName: "Daniel Miller",
        username: "danielm",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/charlie-green-3JmfENcL24M-unsplash_jy1aao.jpg ",
      },
      {
        _id: 112,
        fullName: "Ava Taylor",
        username: "avat",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/alexandru-zdrobau-BGz8vO3pK8k-unsplash_xjds37.jpg ",
      },
      {
        _id: 113,
        fullName: "Liam Anderson",
        username: "liama",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264094/kirill-balobanov-2rIs8OH5ng0-unsplash_kyzydt.jpg ",
      },
    ],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
    bio: "In oneword Celebrity",
    website: "https://example.com/johnd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 104,
    firstName: "Jane",
    lastName: "Smith",
    username: "janes",
    password: "test456",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262408/cld-sample.jpg ",
    bio: "Lover of books and coffee.",
    website: "https://example.com/janes",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 105,
    firstName: "David",
    lastName: "Johnson",
    username: "davidj",
    password: "pass123",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262391/samples/people/smiling-man.jpg  ",
    bio: "Adventure seeker and nature lover.",
    website: "https://example.com/davidj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 106,
    firstName: "Emily",
    lastName: "Brown",
    username: "emilyb",
    password: "letmein",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264107/stefan-stefancik-QXevDflbl8A-unsplash_wmnmqq.jpg ",
    bio: "Photography enthusiast and traveler.",
    website: "https://example.com/emilyb",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 107,
    firstName: "Michael",
    lastName: "Wilson",
    username: "michaelw",
    password: "qwerty123",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264093/irene-strong-v2aKnjMbP_k-unsplash_p124aq.jpg ",
    bio: "Music lover and guitar player.",
    website: "https://example.com/michaelw",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 108,
    firstName: "Sophia",
    lastName: "Jones",
    username: "sophiaj",
    password: "mypassword",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/michael-dam-mEZ3PoFGs_k-unsplash_zh0wjy.jpg ",

    website: "https://example.com/sophiaj",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 109,
    firstName: "William",
    lastName: "Davis",
    username: "williamd",
    password: "welcome1",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264093/ian-dooley-d1UPkiFd04A-unsplash_z2bp6m.jpg ",

    bio: "Sports enthusiast and fitness freak.",
    website: "https://example.com/williamd",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 110,
    firstName: "Mia",
    lastName: "Clark",
    username: "miacl",
    password: "mia123",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",

        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264095/ayo-ogunseinde-6W4F62sN_yI-unsplash_vlsdey.jpg ",

    bio: "Fashion enthusiast and trendsetter.",
    website: "https://example.com/miacl",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 111,
    firstName: "Daniel",
    lastName: "Miller",
    username: "danielm",
    password: "daniel123",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/charlie-green-3JmfENcL24M-unsplash_jy1aao.jpg ",

    bio: "Tech geek and software developer.",
    website: "https://example.com/danielm",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 112,
    firstName: "Ava",
    lastName: "Taylor",
    username: "avat",
    password: "password123",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264096/alexandru-zdrobau-BGz8vO3pK8k-unsplash_xjds37.jpg ",

    bio: "Art lover and aspiring painter.",
    website: "https://example.com/avat",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: 113,
    firstName: "Liam",
    lastName: "Anderson",
    username: "liama",
    password: "password456",
    following: [
      {
        _id: 102,
        fullName: "Prince Raj",
        username: "princeraj",
        profilePicture:
          "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262880/WhatsApp_Image_2023-06-20_at_17.33.46_oi4rs0.jpg",
      },
      {
        _id: 103,
        fullName: "Sarahana Singh",
        username: "kittuaa",
        profilePicture:
          " https://res.cloudinary.com/dejiizvkx/image/upload/v1687262891/WhatsApp_Image_2023-06-20_at_17.37.12_tfde0n.jpg ",
      },
    ],
    followers: [],
    bookmarks: [],
    profilePicture:
      " https://res.cloudinary.com/dejiizvkx/image/upload/v1687264094/kirill-balobanov-2rIs8OH5ng0-unsplash_kyzydt.jpg ",

    bio: "Nature lover and hiking enthusiast.",
    website: "https://example.com/liama",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
];
