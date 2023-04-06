---
to: "<%= locals.route ? `${route}/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.module.scss` : `src/components/${h.changeCase.pascalCase(name)}/${h.changeCase.pascalCase(name)}.module.scss` %>"
---