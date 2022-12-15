# dmp-hub-ui

This repository contains the user interface for the DMPHub system. The DMPHub is a metadata repository for Data Management Plans (DMPs). The website is written in React.

## Functionality

### DMP creation

### DMP curation

### Administrative Dashboards

## Data Sources

This application uses the DMPHub's REST API. The API uses a JSON format that is based on the [RDA Common Metadata Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) to describe DMP metadata. See the [dmp-hub-cfn repository](https://github.com/CDLUC3/dmp-hub-cfn/tree/main/src/sam) for the code and infrastructure behind the REST API.

### DMP JSON structure

The following is an example of a DMP JSON object that would be returned by the REST API. Note that this represents a fetch for a single DMP record (e.g. `https://api.example.org/dmps/10.12345/ABCDEFG`). Endpoints that return multiple DMPs (e.g. `https://api.example.org/dmps?search=example&page=3`) will return a subset of the JSON object (e.g. title, contact, etc.) to reduce the size of the resultset.

See the 'Explanation of DMP JSON contents' below for an explanation of these fields.

```json
{
  "dmp": {
    "title": "Example DMP",
    "description": "An exceptional example of complete DMP metadata",
    "created": "2021-11-08T19:06:04Z",
    "modified": "2022-01-28T17:52:14Z",
    "ethical_issues_description": "We may need to anonymize user data",
    "ethical_issues_exist": "yes",
    "ethical_issues_report": "https://example.edu/privacy_policy",
    "dmp_id": {
      "type": "doi",
      "identifier": "https://doi.org/10.12345/ABCDEFG"
    },
    "contact": {
      "name": "Doe, Jane",
      "mbox": "jane.doe@example.edu",
      "dmproadmap_affiliation": {
        "name": "Example University (example.edu)",
        "affiliation_id": {
          "type": "ror",
          "identifier": "https://ror.org/1234567890"
        }
      },
      "contact_id": {
        "type": "orcid",
        "identifier": "https://orcid.org/0000-0000-0000-000X"
      }
    },
    "contributor": [
      {
        "name": "Doe, Jane",
        "mbox": "jane.doe@example.edu",
        "role": [
          "http://credit.niso.org/contributor-roles/data-curation",
          "http://credit.niso.org/contributor-roles/investigation"
        ],
        "dmproadmap_affiliation": {
          "name": "Example University (example.edu)",
          "affiliation_id": {
            "type": "ror",
            "identifier": "https://ror.org/1234567890"
          }
        },
        "contributor_id": {
          "type": "orcid",
          "identifier": "https://orcid.org/0000-0000-0000-000X"
        }
      }, {
        "name":"Smith PhD., Jennifer",
        "role": [
          "http://credit.niso.org/contributor-roles/investigation"
        ],
        "dmproadmap_affiliation": {
          "name": "University of Somewhere (somwhere.edu)",
          "affiliation_id": {
            "type": "ror",
            "identifier": "https://ror.org/0987654321"
          }
        }
      }, {
        "name": "James, Sarah R.",
        "role": [
          "http://credit.niso.org/contributor-roles/project_administration"
        ]
      }
    ],
    "dataset": [
      {
        "type": "dataset",
        "title": "Odds and ends",
        "description": "Collection of odds and ends",
        "issued": "2022-03-15",
        "keyword": [
          "foo"
        ],
        "dataset_id": {
          "type": "other",
          "identifier": "12345"
        },
        "language": "eng",
        "metadata": [
          {
            "description": "A common metadata standard for datasets",
            "language": "eng",
            "metadata_standard_id": {
              "type": "url",
              "identifier": "https://example.com/metadata_standards/123"
            }
          }
        ],
        "personal_data": "no",
        "data_quality_assurance": [
          "We will ensure that the preserved copies are of high quality"
        ],
        "preservation_statement": "We are going to preserve this data for 20 years",
        "security_and_privacy": [
          {
            "title": "Data security",
            "description": "We're going to encrypt this one."
          }
        ],
        "sensitive_data": "yes",
        "technical_resource": [
          {
            "name": "Elctron microscope 1234",
            "description": "A super electron microscope",
            "dmproadmap_technical_resource_id": {
              "type": "url",
              "identifier": "https://rrids.example.org/98765"
            }
          }
        ],
        "distribution": [
          {
            "title": "Distribution of 'Odds and Ends' to 'Random repo'",
            "access_url": "https://example.edu/datasets/00000",
            "download_url": "https://example.edu/datasets/00000.pdf",
            "available_until": "2052-03-15",
            "byte_size": 1234567890,
            "data_access": "shared",
            "format": [
              "application/vnd.ms-excel"
            ],
            "host": {
              "title": "Random repo",
              "url": "A generic data repository",
              "dmproadmap_host_id": {
                "type": "url",
                "identifier": "https://hosts.example.org/765675"
              }
            },
            "license": [
              {
                "license_ref": "https://licenses.example.org/zyxw",
                "start_date": "2022-03-15"
              }
            ]
          }
        ]
      }
    ],
    "language": "eng",
    "project": [
      {
        "title": "Example research project",
        "description": "Abstract of what we're going to do.",
        "start": "2015-05-12T00:00:00Z",
        "end": "2024-05-24T11:32:21-07:00",
        "funding": [
          {
            "name": "National Funding Organization",
            "funder_id": {
              "type": "fundref",
              "identifier": "http://dx.doi.org/10.13039/100005595"
            },
            "funding_status": "granted",
            "grant_id": {
              "type": "url",
              "identifier": "https://nfo.example.org/awards/098765"
            },
            "dmproadmap_funded_affiliations": [
              {
                "name": "Example University (example.edu)",
                "affiliation_id": {
                  "type": "ror",
                  "identifier": "https://ror.org/1234567890"
                }
              }
            ]
          }
        ]
      }
    ],
    "dmproadmap_sponsors": [
      {
        "name": "Example Lab",
        "affiliation_id": {
          "type": "ror",
          "identifier": "https://ror.org/abcdefg"
        }
      }
    ],
    "dmproadmap_related_identifiers": [
      {
        "descriptor": "cites",
        "type": "doi",
        "identifier": "https://doi.org/10.21966/1.566666",
        "work_type": "dataset"
      },{
        "descriptor": "is_referenced_by",
        "type": "doi",
        "identifier": "10.1111/fog.12471",
        "work_type": "article"
      }
    ]
  }
}
```

### Explanation of DMP JSON contents:

The following describes each of the DMP JSON attributes including links to the RDA Common Standard definition when the values of the attribute are limited to a specific set of values. It includes a description of items along with their data type and whether or not they are **required** or **immutable**. In this case, **immutable** means that the DMPHub manages this information internally and should not be editable within the UI.

In cases where we note that a parent object (e.g. `contributor`) is not required, but some of its children are (e.g. `name` and `role`), we are specifying that those child elements are required IF there is an entry at all (e.g. `contributor` is not required, but if you include one you must supply the `name` and `role`).

- **title**: _String **required**_ - The title of the DMP
- **description**: _String_ - A description of the DMP, typically the project abstract
- **created**: _Datetime (UTC) **immutable**_ - When the DMP was added to the DMPHub system (also the point when the DMP ID was registered).
- **modified**: _Datetime (UTC) **immutable**_ - When the DMP was last modified. This corresponds to the DMP version.
- **ethical_issues_exist**: _String (valid values: [yes, no, unknown])_ - Whether or not the project will deal with sensitive data or other ethical concerns
- **ethical_issues_description**: _String (only applicable if ethical_issues_exist is 'yes')_ - A summary of the concerns.
- **ethical_issues_report**: _URL (only applicable if ethical_issues_exist is 'yes')_ - A link to a policy document or website page
- **language**: _String **required** (default is 'eng') (valid values in [RDA common standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard/blob/6de5ed2a490c16816ad49e0ca1386c6c5430eab9/examples/JSON/JSON-schema/1.1/maDMP-schema-1.1.json#L561)) - The language of the DMP
---
- **dmp_id**: _**immutable**_ - The DMP ID is assigned by the DMPHub API
  - **type**: _String_ - The type of identifier. This is always 'doi' for the DMPHub
  - **identifier**: _String (a DOI URL)_ The unique identifier for the DMP. It should be used when interacting with the DMPHub API
---
- **contact**: _**required** for new records and **immutable** otherwise_ - The creator/owner of the DMP. In the case of the Upload form, this should default to the currently logged in user
  - **name**: _String **required**_ - The full name of the contact 'Last, First'
  - **mbox**: _Email **required**_ - The email address
  - **dmproadmap_affiliation**: _**required**_ - The user's institution/organization
    - **name**: _String **required**_ - The name of the institution/organization (preferably from the ROR record)
    - **affiliation_id**: _**required**_
      - **type**: _String **required**_ - The type of identifier. This should always be 'ror'
      - **identifier**: _ROR URL **required**_ - The unique ROR id (e.g. https://ror.org/1234567890)
  - **contact_id**: _**required**_ 
    - **type**: _String **required**_ - The type of identifier. This should always be 'orcid'
    - **identifier**: _ORCID URL **required**_ - The unique ORCID id (e.g. https://orcid.org/0000-0000-0000-000X)
---
- **contributor**: _Array 0..n_ - An array of project contributors
  - **name**: _String **required**_ - The full name of the contact 'Last, First'
  - **mbox**: _Email_ - The email address
  - **role**: _[String] URL **at least 1 required** (valid values: [Credit Niso contributor roles](http://credit.niso.org/contributor-roles))_ - An array of contributor roles (e.g. `http://credit.niso.org/contributor-roles/investigation`)
  - **dmproadmap_affiliation**
    - **name**: _String **required**_ - Example University (example.edu)
    - **affiliation_id**:
      - **type**: _String **required**_ - The type of identifier. This should always be 'ror'
      - **identifier**: _ROR URL **required**_ - The unique ROR id (e.g. https://ror.org/1234567890)
  - **contributor_id**: 
    - **type**: _String **required**_ - The type of identifier. This should always be 'orcid'
    - **identifier**: _ORCID URL **required**_ - The unique ORCID id (e.g. https://orcid.org/0000-0000-0000-000X)
---  
- **dataset**: _Array 0..n_ - An array of anticipated project outputs (e.g. software, datasets, images, etc.).  
  - **type**: _String **required** (valid values: [audiovisual, collection, data_paper, dataset, event, image, interactive_resource, model_representation, physical_object, service, software, sound, text, workflow, other])_ - The type of project output
  - **title**: _String **required**_ - A name for the project output
  - **description**: _String_ - A description of the project output
  - **issued**: _Date (YYY-MM-DD format)_ - The anticipated release data for the project output
  - **keyword**: _[String]_ - An array of keywords applicable to the project output
  - **dataset_id**: - A unique identifier for the project output. Since these are anticipated objects and not yet real, this is often blank.
    - **type**: _String **required** (valid values in [RDA Common Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard/blob/6de5ed2a490c16816ad49e0ca1386c6c5430eab9/examples/JSON/JSON-schema/1.1/maDMP-schema-1.1.json#L248))_ - The type of identifier
    - **identifier**: _String **required**_ - The value of the identifier
  - **language**: _String **required** (default is 'eng') (valid values in [RDA common standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard/blob/6de5ed2a490c16816ad49e0ca1386c6c5430eab9/examples/JSON/JSON-schema/1.1/maDMP-schema-1.1.json#L561)) - The language of the project output
  - **personal_data**: _String **required** (valid values: [yes, no, unknown])_ - Whether or not the project output will contain PII
  - **data_quality_assurance**: _[String]_ - An array of quality assurance statements about the project output
  - **preservation_statement**: _String_ - A preservation statement about the project output
  - **sensitive_data**: _String **required** (valid values: [yes, no, unknown])_ - Whether or not the project output will contain other sensitive info
  - **security_and_privacy**: _Array 0..n_ - Statements about security and privacy
    - **title**: _String **required**_ - A title for the security and privacy statement
    - **description**: _String **required**_ - The security and privacy statement
  - **metadata**: - An array 0..n of metadata standards that the project output will follow
    - **description**: _String_ - A description/name of the metadata standard
    - **metadata_standard_id**: 
      - **type**: _String **required** (valid values in [RDA Common Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard/blob/6de5ed2a490c16816ad49e0ca1386c6c5430eab9/examples/JSON/JSON-schema/1.1/maDMP-schema-1.1.json#L628))_ - The type of identifier
      - **identifier**: _String **required**_ - The value of the identifier
  - **technical_resource**: _Array 0..n_ - Technical resources used to produce the project output (e.g. an electron microscope)
    - **name**: _String **required**_ - The name of the resource
    - **description**: _String_ - A description of the resource
    - **dmproadmap_technical_resource_id**: 
      - **type**: _String **required** (valid values: [doi, url, other]) - The type of identifier
      - **identifier**: _String **required**_ - The value of the identifier
  - **distribution**: _Array 0..n_ - An array of repositories where the project output will be distributed to (e.g. GitHub, Dryad, Zenodo, etc.)
    - **title**: _String **required**_ - A title for the distribution
    - **byte_size**: _Number_ - The estimated size of the project output in bytes
    - **data_access**: _String **required** (valid values in [RDA Common Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard/blob/6de5ed2a490c16816ad49e0ca1386c6c5430eab9/examples/JSON/JSON-schema/1.1/maDMP-schema-1.1.json#L307))_ - The initial access level for the project output  
    - **host**: - The repository where the project output will be hosted
      - **title**: _String **required**_ The title of the host
      - **url**: _URL_ - The URL landing page for the host
      - **dmproadmap_host_id**: 
        - **type**: _String **required** (valid values in [Re3Data database](https://www.re3data.org))_ - The type of identifier
        - **identifier**: _String **required**_ - The value of the identifier
      - **license**: _Array 0..n_ - An array of license types along with their start dates. If there is only one, the start_date should match the project output's issue date
        - **license_ref**: _URL **required** (valid values in [SPDX database](https://spdx.org/licenses/))_ - the URL to the license 
        - **start_date**: _Date (YYY-MM-DD format)_ - The anticipated release data for the project output
             
    
    "project": [
      {
        "title": "Example research project",
        "description": "Abstract of what we're going to do.",
        "start": "2015-05-12T00:00:00Z",
        "end": "2024-05-24T11:32:21-07:00",
        "funding": [
          {
            "name": "National Funding Organization",
            "funder_id": {
              "type": "fundref",
              "identifier": "http://dx.doi.org/10.13039/100005595"
            },
            "funding_status": "granted",
            "grant_id": {
              "type": "url",
              "identifier": "https://nfo.example.org/awards/098765"
            },
            "dmproadmap_funded_affiliations": [
              {
                "name": "Example University (example.edu)",
                "affiliation_id": {
                  "type": "ror",
                  "identifier": "https://ror.org/1234567890"
                }
              }
            ]
          }
        ]
      }
    ],
   "dmproadmap_sponsors": [
      {
        "name": "Example Lab",
        "affiliation_id": {
          "type": "ror",
          "identifier": "https://ror.org/abcdefg"
        }
      }
    ],
    "dmproadmap_related_identifiers": [
      {
        "descriptor": "cites",
        "type": "doi",
        "identifier": "https://doi.org/10.21966/1.566666",
        "work_type": "dataset"
```

### Versioning


## Infrastructure

This application is hosted in an AWS S3 bucket and served via an AWS Cloudfront distribution. See the [dmp-hub-cfn repository](https://github.com/CDLUC3/dmp-hub-cfn/tree/main) For information on these components

