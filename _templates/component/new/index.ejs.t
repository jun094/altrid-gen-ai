---
to: "<%= locals.route ? `${route}/${h.changeCase.pascalCase(name)}/index.ts` : `src/components/${h.changeCase.pascalCase(name)}/index.tsx` %>"
---
<%
 Name = h.changeCase.pascalCase(name)
%>import <%=Name%> from "./<%=Name%>";

export default <%=Name%>;