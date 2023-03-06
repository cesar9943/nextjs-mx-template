import { ChakraProvider } from "@chakra-ui/react";
import { EnvironmentsEnum } from "@multiversx/sdk-dapp/types";
import { AxiosInterceptorContext } from "@multiversx/sdk-dapp/wrappers/AxiosInterceptorContext";
import { DappProvider } from "@multiversx/sdk-dapp/wrappers/DappProvider";
import Layout from "components/Layout/Layout";
import { MetaHead } from "components/MetaHead/MetaHead";
import {
  apiTimeout,
  sampleAuthenticatedDomains,
  walletConnectV2ProjectId,
} from "config";
import type { AppProps } from "next/app";
import dynamic from "next/dynamic";
import { Provider } from "react-redux";
import store from "redux/store";
import "styles/globals.css";
import customTheme from "theme/chakra";

const SignTransactionsModals = dynamic(
  async () => {
    return (await import("@multiversx/sdk-dapp/UI/SignTransactionsModals"))
      .SignTransactionsModals;
  },
  { ssr: false }
);
const NotificationModal = dynamic(
  async () => {
    return (await import("@multiversx/sdk-dapp/UI/NotificationModal"))
      .NotificationModal;
  },
  { ssr: false }
);
const TransactionsToastList = dynamic(
  async () => {
    return (await import("@multiversx/sdk-dapp/UI/TransactionsToastList"))
      .TransactionsToastList;
  },
  { ssr: false }
);

export default function App({ Component, pageProps }: AppProps) {
  return (
    <AxiosInterceptorContext.Provider>
      <AxiosInterceptorContext.Interceptor
        authenticatedDomanis={sampleAuthenticatedDomains}
      >
        <DappProvider
          environment={EnvironmentsEnum.devnet}
          customNetworkConfig={{
            name: "printaConfig",
            apiTimeout,
            walletConnectV2ProjectId,
          }}
        >
          <Provider store={store}>
            <ChakraProvider resetCSS theme={customTheme}>
              {/* <style jsx global>{`
                html,
                body {
                    font-family: ${inter.style.fontFamily} !important;
                }
            `}</style> */}
              <MetaHead />
              <Layout>
                <AxiosInterceptorContext.Listener />
                <TransactionsToastList />
                <NotificationModal />
                <SignTransactionsModals className="mx-tx-modals" />
                <Component {...pageProps} />
              </Layout>
            </ChakraProvider>
          </Provider>
        </DappProvider>
      </AxiosInterceptorContext.Interceptor>
    </AxiosInterceptorContext.Provider>
  );
}
