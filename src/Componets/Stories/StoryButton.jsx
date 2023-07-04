import styles from "./StoryButton.module.css";

// import "./StoriesButtonmodule.css";

const StoryButton = ({ storiesHandler }) => {
  return (
    <div className={styles.story_container}>
      {/* <button
        style={{ borderRadius: "60%", backgroundColor: "red", border: "none" }}
      >
        <img
          src=""
          style={{
            height: "40px",
            width: "40px",
            backgroundColor: "red",
            borderRadius: "50%",
            margin: 0,
            padding: 0
          }}
        />
      </button> */}

      {/* <button class={styles.insta}>
        <img
          src=" https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 "
          alt=""
          height="50px"
          width="50px"
          className={styles.images}
        />
      </button> */}

      {/* <div> */}
      <button className={styles.content} onClick={() => storiesHandler()}>
        <div className={styles.img_container}>
          <img
            src=" https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 "
            alt=""
            height="50px"
            width="50px"
            // className={styles.images}
          />
        </div>
        <div className={styles.text_container}>Prince</div>
      </button>

      <button className={styles.content}>
        <div className={styles.img_container}>
          <img
            src=" https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 "
            alt=""
            height="50px"
            width="50px"
            // className={styles.images}
          />
        </div>
        <div className={styles.text_container}>Prince</div>
      </button>

      <button className={styles.content}>
        <div className={styles.img_container}>
          <img
            src=" https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 "
            alt=""
            height="50px"
            width="50px"
            // className={styles.images}
          />
        </div>
        <div className={styles.text_container}>Prince</div>
      </button>

      <button className={styles.content}>
        <div className={styles.img_container}>
          <img
            src=" https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 "
            alt=""
            height="50px"
            width="50px"
            // className={styles.images}
          />
        </div>
        <div className={styles.text_container}>Prince</div>
      </button>

      <button className={styles.content}>
        <div className={styles.img_container}>
          <img
            src=" https://images.unsplash.com/photo-1549989476-69a92fa57c36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=800&q=60 "
            alt=""
            height="50px"
            width="50px"
            // className={styles.images}
          />
        </div>
        <div className={styles.text_container}>Prince</div>
      </button>

      {/* </div> */}
    </div>
  );
};

export default StoryButton;
