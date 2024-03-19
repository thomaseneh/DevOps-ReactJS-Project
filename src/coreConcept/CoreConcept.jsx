export default function TabButton({ children, onSelect, isSelected }) {
  return (
    <ul>
      <button className={isSelected ? "active" : null} onClick={onSelect}>
        {children}
      </button>
    </ul>
  );
}

export function CoreConcept({ image, title, description }) {
  return (
    <li>
      <img src={image} alt={description} />
      <h3>{title}</h3>
      <p>{description}</p>
    </li>
  );
}
