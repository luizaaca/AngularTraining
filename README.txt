Feita uma estrutura básica na "solução" em que os três projetos estão plugados. A ideia é criar uma aplicação em camadas com persistencia em banco.
Para fazer a integração dos projetos não foi necessário o uso do arquivo project.json, apenas adicionei os paths dos outros dois projetos em tags
"<ProjectReference>" no csproj do projeto dependente.