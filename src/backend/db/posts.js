import { v4 as uuid } from "uuid";
import { formatDate } from "../utils/authUtils";

/**
 * Posts can be added here.
 * You can add default posts of your wish with different attributes
 * */

export const posts = [
  {
    _id: uuid(),
    content: "Feeling Blessed",
    mediaURL: "",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshuserhu",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },
  {
    _id: uuid(),
    content: "Enjoying Sunset",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1688300384/rachel-cook-mOcdke2ZQoE-unsplash_pn4q7g.jpg",
    likes: {
      likeCount: 34,
      likedBy: [],
      dislikedBy: [],
    },
    username: "adarshuserhu",
    createdAt: formatDate(),
    updatedAt: formatDate(),
  },

  {
    _id: "xhzTkUi2Nt",
    content: "Nice Weather Today!!",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1688300988/mario-alvarez-M1YdS0g8SRA-unsplash_kpei8n.jpg",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "okzxcf",
        username: "janedoe",
        text: "I agree!! Feels like we should go for outing. What say?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshuserhu",
    createdAt: "2022-01-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "siFFxfYI1s",
    content: "Sunshine brings my soul live",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1688300931/aaron-burden-BTubi6qaY6Q-unsplash_wwhhus.jpg",
    likes: {
      likeCount: 0,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "kittuaa",
    createdAt: "2022-05-21T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP1fg",
    content: "Checkout This cloud pic By me",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1688300847/pero-kalimero-9BJRGlqoIUk-unsplash_xsvqsw.jpg",
    likes: {
      likeCount: 1,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nImWvImxo",
        username: "johndoe",
        text: "That's mouth watering! Could you make one for my Birthday as well?",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "kittuaa",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "MTYtVhecCj",
    content:
      "You are never too old to set another goal or to dream a new dream.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshuserhu",
    createdAt: "2022-03-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "3XHvLP9kC",
    content: "Great things takes its time. Feeling Good✨",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262409/cld-sample-4.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "EO7iOPN9n8",
        username: "carlsmith",
        text: "Happy Birthday! Enjoy your Day!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
      {
        _id: "QK52wf6HI1",
        username: "janedoe",
        text: "Wow! Looks Amazzing! Happy Birthday!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "adarshuserhu",
    createdAt: "2022-03-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "tHaThLyFQh",
    content:
      "Life has got all those twists and turns. You’ve got to hold on tight and off you go.",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262398/samples/landscapes/nature-mountains.jpg",
    likes: {
      likeCount: 21,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshuserhu",
    createdAt: "2022-04-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "G-Gi3lSZP9",
    content: "When you have a dream, you’ve got to grab it and never let go.",
    mediaURL: "",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshuserhu",
    createdAt: "2022-05-06T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "GeMUAdi9mh",
    content:
      "No matter what people tell you, words and ideas can change the world.",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262396/samples/ecommerce/accessories-bag.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "adarshuserhu",
    createdAt: "2022-03-06T12:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "IyUlYXTrzZ",
    content: "What's Your View on It",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1687262388/samples/food/dessert.jpg",
    likes: {
      likeCount: 10,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6nIffvImxo",
        username: "sophiajones",
        text: "Oh! That looks Delicious!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "kittuaa",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "Ie92xOSVeU",
    content:
      "Check out this amazing e-commerce app From Me https://prince-quick-cart.vercel.app/ ",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1688306180/WhatsApp_Image_2023-07-02_at_19.22.55_1_oh7e4a.jpg",
    likes: {
      likeCount: 41,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "6fgd534s",
        username: "janedoe",
        text: "Yes! I am also learning from there!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "princeraj",
    createdAt: "2022-04-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "xhzTkUyfNt",
    content:
      "Believe in yourself! Rest all will fall in place. Check my portfolio at https://princerajdev.netlify.app/",
    mediaURL:
      "https://res.cloudinary.com/dejiizvkx/image/upload/v1688306153/WhatsApp_Image_2023-07-02_at_19.24.51_ndca1n.jpg",
    likes: {
      likeCount: 2,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [
      {
        _id: "unImWvIzbf",
        username: "romabulani",
        text: "So True!!",
        votes: {
          upvotedBy: [],
          downvotedBy: [],
        },
      },
    ],
    username: "princeraj",
    createdAt: "2022-05-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },
  {
    _id: "CCmJpDnnQQ",
    content:
      "You can get everything in life you want if you will just help enough other people get what they want.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "emilyb",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "Z_TZT_3EAw",
    content:
      "If you believe something needs to exist, if it's something you want to use yourself, don't let anyone ever stop you from doing it.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "janes",
    createdAt: "2022-01-12T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "e-knMEsoLq",
    content: "More is lost by indecision than wrong decision.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "princeraj",
    createdAt: "2022-01-26T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "VY14RsXC7G",
    content:
      "The reason we struggle with insecurity is because we compare our behind-the-scenes with everyone else’s highlight reel.",
    mediaURL: "",
    likes: {
      likeCount: 7,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "sophiaj",
    createdAt: "2022-03-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "l9pedEMjZS",
    content: "If you don’t risk anything, you risk even more.",
    mediaURL: "",
    likes: {
      likeCount: 6,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "dadidj",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lbW4dlCpNC",
    content: "If it makes you nervous, you’re doing it right.",
    mediaURL: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "miacl",
    createdAt: "2022-04-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "k-Vwd2d7Vt",
    content:
      "I learned a long time ago that there is something worse than missing the goal, and that’s not pulling the trigger.",
    mediaURL: "",
    likes: {
      likeCount: 9,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "michaelw",
    createdAt: "2022-01-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "R2lAuXvK7V",
    content:
      "Success is stumbling from failure to failure with no loss of enthusiasm. Love this quote by Winston Churchill.",
    mediaURL: "",
    likes: {
      likeCount: 12,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "danielm",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "G5xd30tMCR",
    content:
      "Optimism is the faith that leads to achievement. Nothing can be done without hope and confidence.",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "avat",
    createdAt: "2022-02-14T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "lF8cnfPAe9",
    content:
      "Life is like riding a bicycle. To keep your balance you must keep moving.",
    mediaURL: "",
    likes: {
      likeCount: 5,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "liama",
    createdAt: "2022-01-15T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "stfTkUi2Nt",
    content:
      "“Do not wait for the perfect time and place to enter, for you are already onstage.",
    mediaURL: "",
    likes: {
      likeCount: 25,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "princeraj",
    createdAt: "2022-05-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },

  {
    _id: "quiTkUi2Nt",
    content: "It is a rough road that leads to the heights of greatness.",
    mediaURL: "",
    likes: {
      likeCount: 8,
      likedBy: [],
      dislikedBy: [],
    },
    comments: [],
    username: "princeraj",
    createdAt: "2022-02-10T10:55:06+05:30",
    updatedAt: formatDate(),
  },
];
