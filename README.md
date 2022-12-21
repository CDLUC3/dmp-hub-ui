# dmp-hub-ui

This repository contains the user interface for the DMPHub system. The DMPHub is a metadata repository for Data Management Plans (DMPs). The website is written in React.

## Functionality

### DMP Upload/Creation page

### DMP Curation page

### Administrative Dashboards

### DMP Landing page

The Landing page that the DMP ID (DOI) resolves to. Here is an [example from the old DMPHub system](https://dmphub-stg.cdlib.org/dmps/doi:10.48321/D1CW23).

## Data Sources

This application uses the DMPHub's API. The API uses a JSON format that is based on the [RDA Common Metadata Standard](https://github.com/RDA-DMP-Common/RDA-DMP-Common-Standard) to describe DMP metadata. See the [dmp-hub-cfn repository's wiki](https://github.com/CDLUC3/dmp-hub-cfn/wiki/API-Overview) for the available endpoints, an example of the DMP JSON and explanations of each attribute.

## Infrastructure

This application is hosted in an AWS S3 bucket and served via an AWS Cloudfront distribution. See the [dmp-hub-cfn repository](https://github.com/CDLUC3/dmp-hub-cfn/tree/main) For information on these components

