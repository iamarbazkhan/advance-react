import React,{useContext} from "react";
import PropTypes from 'prop-types';
import UserContext from "../context"
const styles = {
  article: {
    paddingBottom: 10,
    borderBottomStyle: "solid",
    borderBottomColor: "#aaa",
    marginBottom: 1,
  },
  title: {
    fontWeight: "bold",
  },
  date: {
    fontSize: "10px",
    color: "#888",
  },
  author: {
    paddingTop: 10,
    paddingBottom: 10,
  },
  body: {
    paddingLeft: 20,
  },
};
const displayDate = (dateString) => {
  return new Date(dateString).toDateString();
};

const Article = (props) => {
 
  // Receiving data through context 
  const {articleActions}= useContext(UserContext)   

  //   const { article, author } = props;
  const { article } = props;
  const author= articleActions.lookupAuthor(article.authorId)

  return (
    <div style={styles.article}>
      <div style={styles.title}>{article.title}</div>
      <div style={styles.date}>{displayDate(article.date)}</div>
      <div style={styles.author}>
        <a href={author.website}>
          {author.firstName}
          {author.lastName}
        </a>
      </div>
      <div style={styles.body}>{article.body}</div>
    </div>
  );
};

Article.propTypes={
  article: PropTypes.shape({
    date:PropTypes.string.isRequired,
    title:PropTypes.string.isRequired,
    body:PropTypes.string.isRequired
  })
}
export default Article;
