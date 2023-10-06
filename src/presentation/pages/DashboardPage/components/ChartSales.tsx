import { ResponsiveBar } from "@nivo/bar";

export const MyResponsiveBar = ({ data } :{ data : { sales: number, date: string}[]}) => (
  <ResponsiveBar
    data={data}
    keys={["sales"]}
    indexBy="date"
    margin={{ top: 50, right: 60, bottom: 50, left: 60 }}
    groupMode="grouped"
    valueScale={{ type: "linear" }}
    indexScale={{ type: "band", round: true }}
    colors={{ scheme: "blues" }}
    defs={[
      {
        id: "dots",
        type: "patternSquares",
        background: "inherit",
        color: "#049FB1",
        size: 1,
        padding: 0,
        stagger: false,
      },
    ]}
    fill={[
      {
        match: {
          id: "sales",
        },
        id: "dots",
      },
      {
        match: {
          id: "sandwich",
        },
        id: "lines",
      },
    ]}
    borderColor={{
      from: "color",
      modifiers: [["darker", "1.5"]],
    }}
    axisTop={null}
    axisRight={null}
    axisBottom={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Vendas Outubro",
      legendPosition: "middle",
      legendOffset: 32,
    }}
    axisLeft={{
      tickSize: 5,
      tickPadding: 5,
      tickRotation: 0,
      legend: "Vendas Outubro",
      legendPosition: "middle",
      legendOffset: -40,
    }}
    labelSkipWidth={12}
    labelSkipHeight={12}
    labelTextColor={{
      from: "color",
      modifiers: [["darker", 1.6]],
    }}
    role="application"
    ariaLabel="Nivo bar chart demo"
    barAriaLabel={(e) =>
      e.id + ": " + e.formattedValue + " in sales: " + e.indexValue
    }
  />
);
