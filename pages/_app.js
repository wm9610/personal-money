import '../styles/globals.css';
import {ThemeProvider} from 'next-themes';
import Layout from '../components/Layout';
import {ExpenseProvider} from '../context/ExpenseContext';

function MyApp({Component, pageProps}) {
  return (
    <ThemeProvider enableSystem={true} attribute="class">
      <ExpenseProvider>
        <Layout>
          <Component {...pageProps} />
        </Layout>
      </ExpenseProvider>
    </ThemeProvider>
  );
}

export default MyApp;
