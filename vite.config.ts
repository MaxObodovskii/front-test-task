import { TanStackRouterVite } from "@tanstack/router-vite-plugin";
import react from "@vitejs/plugin-react-swc";
import { defineConfig } from "vitest/config";
import tsconfigPaths from "vite-tsconfig-paths";
import svgr from "vite-plugin-svgr";
import replace from "@rollup/plugin-replace";

// https://vitejs.dev/config/
export default defineConfig({
	plugins: [
		react(),
		svgr(),
		TanStackRouterVite(),
		tsconfigPaths(),
		replace({
			"process.env.REACT_APP_GITHUB_TOKEN": JSON.stringify(
				process.env.REACT_APP_GITHUB_TOKEN
			),
		}),
	],
	resolve: {
		alias: [{ find: "@", replacement: "/src" }],
	},
	server: {
		host: true,
		strictPort: true,
	},
	test: {
		environment: "jsdom",
		setupFiles: ["./vitest.setup.ts"],
		css: true,
	},
});
