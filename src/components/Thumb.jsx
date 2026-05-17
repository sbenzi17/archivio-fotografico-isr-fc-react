export default function Thumb({ photo, onClick }) {
  return (
    <a
      href={`/foto/${photo.id}`}
      className="thumb"
      onClick={(e) => {
        if (onClick) {
          e.preventDefault();
          onClick(photo);
        }
      }}
    >
      <div className={`thumb-img ${photo.bg}`} data-label={photo.label}></div>
      <div className="thumb-caption">{photo.caption}</div>
    </a>
  );
}
