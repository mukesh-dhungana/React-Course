import Provider from "./Provider";
import CounterProvider from "./CounterProvider";
import Users from "./Users";
import Test from "./Test";

const ProviderWrapper = () => {
  return (
    <Provider>
      <CounterProvider>
        <Users />
        <Test />
      </CounterProvider>
    </Provider>
  );
};

export default ProviderWrapper;
