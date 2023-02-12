import Head from "next/head";
import Image from "next/image";
import { Inter } from "@next/font/google";
import styles from "@/styles/Home.module.css";
import { Layout, Menu } from "antd";
import { Pane } from "evergreen-ui";
import type { MenuProps } from "antd";

const inter = Inter({ subsets: ["latin"] });

const { Header, Content } = Layout;

type MenuItem = Required<MenuProps>["items"][number];

function getItem(label: React.ReactNode, key: React.Key): MenuItem {
	return {
		key,
		label,
	} as MenuItem;
}

const items: MenuItem[] = [
	getItem("Post", "1"),
	getItem("Log In", "2"),
	getItem("Profile", "3"),
];

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
					id="logo"
					style={{
						float: "left",
						width: 120,
						height: 31,
						margin: "16px 24px 16px 0",
						backgroundColor: "white",
					}}
				/>
				<Menu
					style={{ width: "15%", float: "right" }}
					theme="light"
					mode="horizontal"
					defaultSelectedKeys={["2"]}
					items={items}
				/>
			</Header>
			<Content
				className="site-layout"
				style={{ backgroundColor: "grey", padding: "0 350px" }}
			>
				<Pane padding={24} backgroundColor="white">
					Content
				</Pane>
			</Content>
		</Layout>
	);
}
