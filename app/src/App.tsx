import Button from "./Button";
import DocumentList from "./DocumentList";

const mock = [
  {
    id: 1,
    title: "Rundofase",
    lastEditedAt: "08/08/2020"
  },
  {
    id: 2,
    title: "Genco Pura Olive Oil Company, Genco Pura Olive Oil Company",
    lastEditedAt: "08/08/2020"
  },
  {
    id: 3,
    title: "Bubba Gump",
    lastEditedAt: "08/08/2020"
  },
]


function App() {
  return (
    <main>
      <section>
        <h2>1. Component “BUTTON”</h2>
        <ul className="grid">
          <li>
            <Button variant="primary">Normal</Button>
          </li>
          <li>
            <Button variant="secondary">Secondary</Button>
          </li>
          <li>
            <Button variant="primary" disabled>
              Disabled
            </Button>
          </li>
          <li>
            <Button variant="secondary" disabled>
              Disabled
            </Button>
          </li>
        </ul>
      </section>
      <section>
        <h2>2. Component “DOCUMENT LIST”</h2>
        <DocumentList documents={mock} />
      </section>
    </main>
  );
}

export default App;
