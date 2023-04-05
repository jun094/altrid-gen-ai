---
to: "<%= locals.route ? `${route}/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.tsx` : `src/components/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.tsx` %>"
---
<%
 Name = h.changeCase.pascalCase(name)
%>import styles from './<%=Name%>.module.scss';

type <%=Name%>Props = {};

const <%=Name%> = ({}: <%=Name%>Props) => {
  return <div className={styles}></div>
};

export default <%=Name%>;