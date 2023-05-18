import Button from "../Button";
import documentIcon from "../assets/document.png";
import "./DocumentList.scss";

function DocumentList({ documents }: DocumentListProps) {
  const documentList = documents.map(
    ({ id, title, lastEditedAt }: DocumentProps) => (
      <li className="document-list__item document" key={id}>
        <div className="document__content">
          <div className="document__icon" aria-hidden="true">
            <img width={36} height={48} src={documentIcon} alt="" />
          </div>
          <div className="document__info">
            <strong id={`document-${id}`} className="document__title">
              {title}
            </strong>
            <small className="document__last-edited">
              Last Edited: {lastEditedAt}
            </small>
          </div>
        </div>
        <div className="document__actions">
          <Button
            variant="primary"
            aria-labelledby={`document-${id}`}
            onClick={() => console.log(`Document ${id}`)}
          >
            View document
          </Button>
        </div>
      </li>
    )
  );

  if (!documents.length) {
    return <p>No documents yet</p>;
  }

  return <ul className="document-list">{documentList}</ul>;
}

interface DocumentProps {
  id: number;
  title: string;
  lastEditedAt: string;
}

interface DocumentListProps {
  documents: DocumentProps[];
}

export default DocumentList;
