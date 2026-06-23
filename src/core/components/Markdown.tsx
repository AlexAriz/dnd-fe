import ReactMarkdown, { type Options } from "react-markdown";
import remarkGfm from "remark-gfm";
import Typography from "@mui/material/Typography";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import Table from "@mui/material/Table";
import TableHead from "@mui/material/TableHead";
import TableBody from "@mui/material/TableBody";
import TableRow from "@mui/material/TableRow";
import TableCell from "@mui/material/TableCell";
import { Link } from "react-router";

function Markdown({ children }: Options) {
  return (
    <ReactMarkdown
      remarkPlugins={[remarkGfm]}
      components={{
        h1(props) {
          return <Typography variant="h1" {...props} />;
        },
        h2(props) {
          return <Typography variant="h2" {...props} />;
        },
        h3(props) {
          return <Typography variant="h3" {...props} />;
        },
        h4(props) {
          return <Typography variant="h4" {...props} />;
        },
        h5(props) {
          return <Typography variant="h5" {...props} />;
        },
        h6(props) {
          return <Typography variant="h6" {...props} />;
        },
        p(props) {
          return <Typography variant="body1" gutterBottom {...props} />;
        },
        ul(props) {
          return <List {...props} disablePadding />;
        },
        ol(props) {
          return <List {...props} disablePadding />;
        },
        li(props) {
          return <ListItem {...props} className={`${props.className} py-0`} />;
        },
        table: Table,
        thead: TableHead,
        tbody: TableBody,
        tr(props) {
          return <TableRow hover {...props} />;
        },
        th(props) {
          return <TableCell children={props.children} />;
        },
        td(props) {
          return <TableCell children={props.children} />;
        },
        a(props) {
          return <Link to={props.href as string}>{props.children}</Link>;
        },
      }}
    >
      {children}
    </ReactMarkdown>
  );
}

export default Markdown;
