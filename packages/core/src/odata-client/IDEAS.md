# Ideas

* differentiate string or column name ref/val

## Requirements from CAP
- Version transparency for v2 / v4
- CSRF token handling
- etag handling

## Where to locate the "untyped" layer
- Do we need EDM type parsing for OData requests

## Not supported features

- Requesting Inividual Properties of an entity by key, e. g.
  - v2: https://services.odata.org/V2/Northwind/Northwind.svc/Categories(1)/CategoryName?$format=json
  - v4: https://services.odata.org/Experimental/Northwind/Northwind.svc/Categories(1)/CategoryName?$format=json

- Individual properties raw values:
  - v2: https://services.odata.org/V2/Northwind/Northwind.svc/Categories(1)/CategoryName/$value
  - v4: https://services.odata.org/Experimental/Northwind/Northwind.svc/Categories(1)/CategoryName/$value


## Questions

- What are enum properties?

## Completely new features
- Singletons
- search
- lambda operators
  ```
  GET serviceRoot/People?$filter=Emails/any(s:endswith(s, 'contoso.com'))
  ```
- function parameters (do they also exist for v2?)
  ```
  GET http://host/service.svc/Employees?$filter=Region eq @p1&@p1='WA'
  ```
- Get references of navigation properties, represent inline
Example 39: for each customer entity within the Customers entity set the references to the related Orders will be represented inline

GET http://host/service.svc/Customers?$expand=Orders/done

## Differences

### Format
- v4 default format is json (v2 has to set it explicitly)

### Navigation properties

- different format, no associations
  - v2:
  ```
  <NavigationProperty Name="Customer" Relationship="NorthwindModel.FK_Orders_Customers" FromRole="Orders" ToRole="Customers" />
  ```
  - v4:
  multiplicity one to one
  ```
  <NavigationProperty Name="Customer" Type="NorthwindModel.Customer" Partner="Orders">
    <ReferentialConstraint Property="CustomerID" ReferencedProperty="CustomerID" />
  </NavigationProperty>
  ```
  multiplicity one to many
  ```
  <NavigationProperty Name="Order_Details" Type="Collection(NorthwindModel.Order_Detail)" Partner="Order" />
  ```
-

### $expand

- Navigation properties can be filtered, e. g.
 ```
 https://services.odata.org/Experimental/Northwind/Northwind.svc/Orders?$expand=Order_Details($filter=ProductID%20eq%2011)
 ```

### $filter
-
