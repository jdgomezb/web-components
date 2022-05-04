// import readme from './readme.md';

export default {
  title: 'JDG/StockPrice',
  parameters: {
    // notes: readme,
  },
}

const Template = args => `
  <jd-stock-price stock-symbol="${args.stockSymbol}"></jd-stock-price>
`;

export const Default = Template.bind({});
Default.args = {
  stockSymbol: 'AAPL',
};
