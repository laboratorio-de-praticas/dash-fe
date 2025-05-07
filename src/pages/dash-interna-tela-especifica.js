import Layout from "../layout/Layout";
import Head from "next/head";
import DashInternoCard from "../components/DashInternaTelaCard/DashInternaTelaCard";

function DashInterna() {
  return (
    <>
      <Head>
        <title>Dash Interna</title>
        <meta name="description" content="Descrição da sua aplicação" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
      </Head>
     <DashInternoCard />
    </>
  );
}

export default DashInterna;
