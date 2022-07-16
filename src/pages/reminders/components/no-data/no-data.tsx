import './no-data.css'

export function NoData (): JSX.Element {
  return (
    <div className="no-data app-default-box-shadow">
      <h2>Nada encontrado</h2>
      <p>Tente ampliar sua pesquisa ou insira algum dado</p>
    </div>
  )
}
