import { Container } from "./component/container";
import { Chart } from "./component/chart";
import { Table } from "./component/table";

function App() {
  return (
    <Container>
      <Chart />
      <Table />
    </Container>
  );
}

export default App;
