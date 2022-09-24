## How to Run 

### **Informações Necessárias**
- Versão do Node do projeto é a 16.17.0
- Manager Package é o [Yarn](https://classic.yarnpkg.com/en/)

**In terminal**

- ```git clone https://github.com/efrainmpp1/BaseProject-ReactJS.git```
- ```cd BaseProject-ReactJS```
- ```yarn```
- ```yarn start```

## **Fluxo de Desenvolvimento**

**Sprint**
```mermaid
flowchart
A[Start of Sprint] -- branch from STABLE --> B[Development]
B --> C[MR: Develop]
C --> D{Aprove?}
D -- Yes --> E[Test: Develop] --> F
D -- No --> G[Correction] --> D
F{Pass?} -- Yes --> H[MR: Stable] --> I[Presentation]
F -- No --> G
```