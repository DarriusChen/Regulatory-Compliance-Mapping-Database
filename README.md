# Regulatory-Compliance-Mapping-Database
This project aims to create a database of the mapping between different Regulatory Compliance Standards and Cybersecurity Frameworks, then make a convenient search function.   
The five standards and frameworks include:
1. NIST Cybersecurity Framework (CSF)
2. NIST SP 800-53
3. MITRE ATT&CK (V13)
4. MITRE D3FEND
5. ISO 27001

## Prerequisites:
1. SQLite
2. Docker
3. Python

### GraphQL server
Use case: Search data in SQLite database using gql.   
Run `npm start` to launch the server, and then there will be a playground at port 4000.   
You can try different functions you want, type the columns to query, and the variable you want to filter.   
![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/gql.png)
In the example above, what I did is query six columns, "csfFId, csfFName, defendTName, attackTName, sp80053CName, iso27001CName", where the values of column "csfFId" equal to "ID"

### Metabase & metabase API
Use case: Get data from the Metabase server using Python.  
Prerequisites: Docker   
#### Launch Metabase server
```
docker pull metabase/metabase:latest
docker run -d -p 12345:3000 -v /Users/darri/Desktop/iii-intern/mapping/framework.db:/opt/metabase.db --name metabase2 metabase/metabase
```
![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/metabase-operation.png)
![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/metabase-result.png)
#### Metabse API
You can either directly use the requests library to get data or use the "metabase_api" library.   
1. Get data using python requests:
    ```
    pip3 install pandas # if needed
    pip3 install requests # if needed
   ```
    ```
    import pandas as pd
    import requests

    # get the credentials
    response_id = requests.post('http://{your-host-name}/api/session',
                         headers = {'Content-Type': 'application/json'},
                         json={'username': {your-user-name},
                               'password': {your-passwords})
    session_id = response_id.json()['id']
    headers = {'X-Metabase-Session': session_id}

    # get data (ask questions)
    
    # how many tables & names of those tables
    url = 'http://{your-host-name}/api/table/'
    question2 = requests.get(url=url,headers=headers).json()
    table_name = [i["display_name"] for i in question2]
    print(f"There are {len(question2)} tables.\n",f"Names of those tables: {table_name}")

    # get the all mapping question (card)
    url_card = 'http://{your-host-name}/api/card/{your-card-id}/query/json'
    card_question = requests.post(url=url_card,headers=headers).json()
    pd.DataFrame(card_question)
    ```
    ![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/requests.png)
    
2. Get data using metabase_api:
   ```
   from metabase_api import Metabase_API
   mb = Metabase_API('http://{your-host-name}', {your-account}, {your-passwords)  # if password is not given, it will prompt for password
   results = mb.get_card_data(card_id=5, data_format='json') # data format can be json or csv
   pd.DataFrame(results)
   ```
   ![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/result-df.png)

