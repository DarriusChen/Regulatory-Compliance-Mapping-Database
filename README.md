# Regulatory-Compliance-Mapping-Database
This project aims to create a database of the mapping between different Regulatory Compliance Standards and Cybersecurity Frameworks, then make a convenient search function.
The five standards and frameworks include:
1. NIST Cybersecurity Framework (CSF)
2. NIST SP 800-53
3. MITRE ATT&CK (V13)
4. MITRE D3FEND
5. ISO 27001

### GraphQL server
Use case: search data in SQLite database using gql.
Run `npm start` to launch the server, and then there will be a playground at port 4000.
You can try different functions you want, type the columns to query, and the variable you want to filter.
![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/assets/90314540/9f9bc0b0-b265-43e9-b1ce-20ce7aaf1ef8)
In the example above, what I did is query the column "csf_f_ID", and "csf_f_name" if the value "csf_f_ID" is equal to "ID"

