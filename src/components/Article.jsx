
function Article({ title, date = "January 1, 2021", preview, minutes }) {
  return (
    <article>
      <h2>{title}</h2>
      <p>{date}</p>
      <p>{preview}</p>
      <p>{minutes} minutes to read</p>
    </article>
  );
}

export default Article;

