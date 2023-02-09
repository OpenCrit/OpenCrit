import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout, Menu } from "antd";
import { Pane } from "evergreen-ui";

const inter = Inter({ subsets: ["latin"] });

const { Header, Content, Footer } = Layout;

export default function Home() {
	return (
		<Layout>
			<Header
				style={{
					position: "sticky",
					top: 0,
					zIndex: 1,
					width: "100%",
					backgroundColor: "white",
				}}
			>
				<div
					style={{
						float: "left",
						width: 120,
						height: 31,
						margin: "16px 24px 16px 0",
						backgroundColor: "white",
					}}
				/>
				<Menu
					theme="light"
					mode="horizontal"
					defaultSelectedKeys={["2"]}
					items={new Array(3).fill(null).map((_, index) => ({
						key: String(index + 1),
						label: `nav ${index + 1}`,
					}))}
				/>
			</Header>
			<Content className="site-layout" style={{ padding: "0 350px" }}>
				<Pane padding={24} backgroundColor="white">
					Content
				</Pane>
			</Content>
			<Footer style={{ textAlign: "center" }}>
				OMG ITS A WEBSITE POG
			</Footer>
		</Layout>
	);
}
