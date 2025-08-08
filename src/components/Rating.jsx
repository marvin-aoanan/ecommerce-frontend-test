const Rating = ({ value, count }) => {
  const fullStars = Math.floor(value);
  const hasHalfStar = value - fullStars >= 0.5;
  const totalStars = 5;

  return (
    <div className="d-flex align-items-center">
      {[...Array(totalStars)].map((_, i) => {
        if (i < fullStars) {
          return <span key={i} className="text-warning">★</span>;
        } else if (i === fullStars && hasHalfStar) {
          return <span key={i} className="text-warning">☆</span>;
        } else {
          return <span key={i} className="text-muted">☆</span>;
        }
      })}
      {count !== undefined && (
        <span className="ms-2 text-muted small">({count} reviews)</span>
      )}
    </div>
  );
};

export default Rating;
