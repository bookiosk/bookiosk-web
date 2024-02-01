import { mergeConfig } from 'vite';
import eslint from 'vite-plugin-eslint';
import baseConfig from './vite.config.base';

export default mergeConfig(
  {
    mode: 'development',
    // 代理跨域
    server: {
      proxy: {
        '/api': {
          // 获取数据的服务器地址设置
          target: 'http://localhost:8801',
          // 需要代理跨域
          changeOrigin: true,
          // 路径重写
          rewrite: (path: string) => path.replace(/^\/api/, '/dev-api'),
        },
      },
    },
    plugins: [
      eslint({
        cache: false,
        include: ['src/**/*.ts', 'src/**/*.tsx', 'src/**/*.vue'],
        exclude: ['node_modules'],
      }),
    ],
  },
  baseConfig
);
