# Regulatory-Compliance-Mapping-Database (change for jira)

## Abstract
This project aims to create a database of the mapping between different Regulatory Compliance Standards and Cybersecurity Frameworks. We use Metabase to help join the tables, then use GraphQL as our data search tool. (Of course, there are still many alternatives like Elastic Stack or Redis, but we use GraphQL in this case.)     
The spreadsheets of five standards and frameworks:
1. [NIST Cybersecurity Framework (CSF)](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
2. [NIST SP 800-53](https://csrc.nist.gov/files/pubs/sp/800/53/r5/upd1/final/docs/sp800-53r5-controls.xlsx)
3. [MITRE ATT&CK (V13)](https://attack.mitre.org/resources/working-with-attack/)
4. [MITRE D3FEND](https://d3fend.mitre.org/resources/)
5. [ISO 27001](http://www.itref.ir/uploads/editor/2ef522.pdf)
   
In order to join all data from different frameworks, we need some mapping spreadsheets as follows:
1. [CSF ←→ SP 800-53](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
2. [SP 800-53 ←→ ISO27001](https://csrc.nist.gov/pubs/sp/800/53/r5/upd1/final)
3. [CSF ←→ SP 800-207](https://www.nccoe.nist.gov/sites/default/files/2022-12/zta-nist-sp-1800-35e-preliminary-draft.pdf)
4. [SP 800-53 ←→ MITRE ATT&CK (V12)](https://mitre-engenuity.org/cybersecurity/center-for-threat-informed-defense/our-work/nist-800-53-control-mappings/)
5. [SP 800-53 ←→ MITRE D3FEND](https://d3fend.mitre.org/mappings/nist/5/)
6. [MITRE D3FEND ←→ MITRE ATT&CK (Tool)](https://d3fend.mitre.org/tools/d3fend-extractor/?q=%5B%22d3f%3AAccessModeling%22%2C%22d3f%3AAccountLocking%22%2C%22d3f%3AActiveCertificateAnalysis%22%2C%22d3f%3AActiveLogicalLinkMapping%22%2C%22d3f%3AActivePhysicalLinkMapping%22%2C%22d3f%3AAdministrativeNetworkActivityAnalysis%22%2C%22d3f%3AApplicationConfigurationHardening%22%2C%22d3f%3AApplicationHardening%22%2C%22d3f%3AAssetInventory%22%2C%22d3f%3AAssetVulnerabilityEnumeration%22%2C%22d3f%3AAuthenticationCacheInvalidation%22%2C%22d3f%3AAuthenticationEventThresholding%22%2C%22d3f%3AAuthorizationEventThresholding%22%2C%22d3f%3ABiometricAuthentication%22%2C%22d3f%3ABootloaderAuthentication%22%2C%22d3f%3ACertificateAnalysis%22%2C%22d3f%3AConfigurationInventory%22%2C%22d3f%3AConnectedHoneynet%22%2C%22d3f%3AConnectionAttemptAnalysis%22%2C%22d3f%3ACredentialCompromiseScopeAnalysis%22%2C%22d3f%3ACredentialEviction%22%2C%22d3f%3ACredentialHardening%22%2C%22d3f%3ACredentialRevoking%22%2C%22d3f%3ACredentialTransmissionScoping%22%2C%22d3f%3ADNSAllowlisting%22%2C%22d3f%3ADNSDenylisting%22%2C%22d3f%3ADNSTrafficAnalysis%22%2C%22d3f%3ADataInventory%22%2C%22d3f%3ADatabaseQueryStringAnalysis%22%2C%22d3f%3ADecoyEnvironment%22%2C%22d3f%3ADecoyFile%22%2C%22d3f%3ADecoyNetworkResource%22%2C%22d3f%3ADecoyObject%22%2C%22d3f%3ADecoySessionToken%22%2C%22d3f%3ADecoyUserCredential%22%2C%22d3f%3ADiskEncryption%22%2C%22d3f%3ADomainAccountMonitoring%22%2C%22d3f%3ADomainTrustPolicy%22%2C%22d3f%3ADynamicAnalysis%22%2C%22d3f%3AEmailRemoval%22%2C%22d3f%3AEmulatedFileAnalysis%22%2C%22d3f%3AExecutableAllowlisting%22%2C%22d3f%3AExecutableDenylisting%22%2C%22d3f%3AExecutionIsolation%22%2C%22d3f%3AFileAnalysis%22%2C%22d3f%3AFileCarving%22%2C%22d3f%3AFileContentRules%22%2C%22d3f%3AFileCreationAnalysis%22%2C%22d3f%3AFileEncryption%22%2C%22d3f%3AFileEviction%22%2C%22d3f%3AFileHashing%22%2C%22d3f%3AFileRemoval%22%2C%22d3f%3AFirmwareBehaviorAnalysis%22%2C%22d3f%3AFirmwareEmbeddedMonitoringCode%22%2C%22d3f%3AFirmwareVerification%22%2C%22d3f%3AForwardResolutionDomainDenylisting%22%2C%22d3f%3AHardwareComponentInventory%22%2C%22d3f%3AHierarchicalDomainDenylisting%22%2C%22d3f%3AHomoglyphDenylisting%22%2C%22d3f%3AHomoglyphDetection%22%2C%22d3f%3AIOPortRestriction%22%2C%22d3f%3AIPCTrafficAnalysis%22%2C%22d3f%3AIdentifierActivityAnalysis%22%2C%22d3f%3AIdentifierAnalysis%22%2C%22d3f%3AIdentifierReputationAnalysis%22%2C%22d3f%3AInboundSessionVolumeAnalysis%22%2C%22d3f%3AInboundTrafficFiltering%22%2C%22d3f%3AInputDeviceAnalysis%22%2C%22d3f%3AIntegratedHoneynet%22%2C%22d3f%3AJobFunctionAccessPatternAnalysis%22%2C%22d3f%3ALocalAccountMonitoring%22%2C%22d3f%3ALocalFilePermissions%22%2C%22d3f%3ALogicalLinkMapping%22%2C%22d3f%3AMandatoryAccessControl%22%2C%22d3f%3AMemoryBoundaryTracking%22%2C%22d3f%3AMessageAnalysis%22%2C%22d3f%3ANetworkIsolation%22%2C%22d3f%3ANetworkMapping%22%2C%22d3f%3ANetworkNodeInventory%22%2C%22d3f%3ANetworkTrafficAnalysis%22%2C%22d3f%3ANetworkTrafficCommunityDeviation%22%2C%22d3f%3ANetworkTrafficFiltering%22%2C%22d3f%3ANetworkTrafficPolicyMapping%22%2C%22d3f%3AOperatingSystemMonitoring%22%2C%22d3f%3AOperationalActivityMapping%22%2C%22d3f%3AOutboundTrafficFiltering%22%2C%22d3f%3APassiveCertificateAnalysis%22%2C%22d3f%3APassiveLogicalLinkMapping%22%2C%22d3f%3APassivePhysicalLinkMapping%22%2C%22d3f%3APhysicalLinkMapping%22%2C%22d3f%3APlatformHardening%22%2C%22d3f%3APlatformMonitoring%22%2C%22d3f%3AProcessAnalysis%22%2C%22d3f%3AProcessCodeSegmentVerification%22%2C%22d3f%3AProcessEviction%22%2C%22d3f%3AProcessLineageAnalysis%22%2C%22d3f%3AProcessSegmentExecutionPrevention%22%2C%22d3f%3AProcessSpawnAnalysis%22%2C%22d3f%3AProcessSuspension%22%2C%22d3f%3AProcessTermination%22%2C%22d3f%3AProtocolMetadataAnomalyDetection%22%2C%22d3f%3ARPCTrafficAnalysis%22%2C%22d3f%3ARelayPatternAnalysis%22%2C%22d3f%3ARemoteTerminalSessionDetection%22%2C%22d3f%3AResourceAccessPatternAnalysis%22%2C%22d3f%3AReverseResolutionIPDenylisting%22%2C%22d3f%3AScheduledJobAnalysis%22%2C%22d3f%3ASegmentAddressOffsetRandomization%22%2C%22d3f%3ASenderMTAReputationAnalysis%22%2C%22d3f%3ASenderReputationAnalysis%22%2C%22d3f%3AServiceBinaryVerification%22%2C%22d3f%3ASessionDurationAnalysis%22%2C%22d3f%3AShadowStackComparisons%22%2C%22d3f%3ASoftwareInventory%22%2C%22d3f%3ASoftwareUpdate%22%2C%22d3f%3AStackFrameCanaryValidation%22%2C%22d3f%3AStandaloneHoneynet%22%2C%22d3f%3AStrongPasswordPolicy%22%2C%22d3f%3ASystemCallAnalysis%22%2C%22d3f%3ASystemCallFiltering%22%2C%22d3f%3ASystemConfigurationPermissions%22%2C%22d3f%3ASystemDaemonMonitoring%22%2C%22d3f%3ASystemFileAnalysis%22%2C%22d3f%3ASystemFirmwareVerification%22%2C%22d3f%3ASystemInitConfigAnalysis%22%2C%22d3f%3ASystemMapping%22%2C%22d3f%3ASystemVulnerabilityAssessment%22%2C%22d3f%3AURLAnalysis%22%2C%22d3f%3AURLReputationAnalysis%22%2C%22d3f%3AUserAccountPermissions%22%2C%22d3f%3AUserBehaviorAnalysis%22%2C%22d3f%3AUserGeolocationLogonPatternAnalysis%22%2C%22d3f%3AUserSessionInitConfigAnalysis%22%5D)

## Tools
1. [Metabase](https://www.metabase.com/)
   is a simple and powerful analytics tool which lets anyone learn and make decisions from their company’s data—no technical knowledge required.
   
2. [GraghQL](https://graphql.org/)
   is a query language for APIs and a runtime for fulfilling those queries with your existing data. It provides a complete and understandable description of the data in your API, gives clients the power to ask for exactly what they need and nothing more, makes it easier to evolve APIs over time, and enables powerful developer tools.
   
## Database
The Database is for internal use, so I can't share it in public. You can try with your own database with the workflow of this project. (The original database is put under "graphql-server/src/database".)

## Prerequisites:
1. SQLite (3.39.5)
2. Docker (24.0.5)
3. Python (>=3.11)

### GraphQL server
Use case: Search data in SQLite database using gql.   
Run `npm start` under "graphql-server/" to launch the server, and then there will be a playground at port 4000.   
You can try different functions you want, type the columns to query, and the variable you want to filter.   
![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/gql.png)
In the example above, what I did is query six columns, "csfFId, csfFName, defendTName, attackTName, sp80053CName, iso27001CName", where the values of column "csfFId" equal to "ID"

### Metabase
Use case: Get data from the Metabase server using Python.  
Prerequisites: Docker   
#### Launch Metabase server
```
docker-compose up  # run this command under metabase directory
```
![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/metabase-operation.png)
This is the edit interface which can let you do some actions like join, filter, or sort without writing SQL commands. (You can also get the SQL commands of what you did.)
![image](https://github.com/DarriusChen/Regulatory-Compliance-Mapping-Database/blob/main/images/metabase-result.png)
Above is the result of joining tables using Metabase.

### Metabse API
You can either directly use the requests library to get data or use the "metabase_api" library.   
1. Get data using python requests:  
   Commands in terminal 
    ```
    pip3 install pandas # if needed
    pip3 install requests # if needed
    pip3 install pdm # virtual environment tool
    pdm add
   ```
    Python codes
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
