## api proposal

### lambda expression, e.g., any/all
> OData defines two operators that evaluate a Boolean expression on a collection. Both must be prepended with a navigation path that identifies a collection.
#### example
Give me a person who has a friend with username 'scottketchum'.
```
/People?$filter=Friends/any(f:f/UserName eq 'scottketchum')
```
#### current navigation + filter
```
TestEntity.TO_SINGLE_LINK.filter(
    TestEntitySingleLink.KEY_PROPERTY.equals('test'),
    TestEntitySingleLink.BOOLEAN_PROPERTY.equals(false)
)

"to_SingleLink/KeyProperty eq 'test' and to_SingleLink/BooleanProperty eq false"
```
#### proposal
- example of reference service: 
```
https://services.odata.org/TripPinRESTierService/(S(miemz3v3blexv3n23th5mzju))/People('russellwhyte')?$filter=Friends/any(f:f/UserName eq 'scottketchum')&$expand=Friends
```
- api:
```
function any(filterExp: filterable): FilterLink

People.Friends.filter(
    any(
        People.UserName.equals('scottketchum')
    )
)
```

### $search
#### proposal
- example of reference service: 

**NOTE:**
The `$search` keyword does not work, even this is copied from the official doc.
```
http://host/service/Products?$search=(mountain OR bike) AND NOT clothing
```
- api
```
something
.requestBuilder()
.getAll()
.search(
    and(
        or(
            'mountain',
            'bike'
        ),
        not('clothing')
    )
)
```

### introduce `expand()` function instead of using `select()` for expand
##### reasons
- distinguish select and expand explicitly for transparency
- expand recursive has new url structure, see example below
- expand with more keywords together, therefore more complicated
    - `$filter`
    - `$top`
    - `$select`

##### example: expand recursive with new url structure
- v2
```
https://services.odata.org/V2/(S(mt3vqttcgcwd2dexmlwupbmh))/OData/OData.svc/Categories?$expand=Products/Supplier&$format=json
```

- v4
```
https://services.odata.org/TripPinRESTierService/(S(miemz3v3blexv3n23th5mzju))/People('russellwhyte')?$select=UserName&$expand=Friends($expand=Friends)
```

### $expand
#### only expand
- example of reference service: 
```
https://services.odata.org/TripPinRESTierService/(S(miemz3v3blexv3n23th5mzju))/People('russellwhyte')?$expand=Friends
```
- api:
```
.expand(
    People.Friends
)
```
#### expand + top
- example of reference service: 
```
https://services.odata.org/TripPinRESTierService/(S(miemz3v3blexv3n23th5mzju))/People('russellwhyte')?$expand=Friends($top=1)
```
- api:
```
.expand(
    {
        link: People.Friends,
        top: 1
    }
)
```
#### expand + select
- example of reference service: 
```
https://services.odata.org/TripPinRESTierService/(S(miemz3v3blexv3n23th5mzju))/People('russellwhyte')?$expand=Friends($select=UserName)
```
- api:
```
.expand(
    {
        link: People.Friends,
        select: Peopele.UserName
    }
)
```
#### expand + filter
- example of reference service: 
```
https://services.odata.org/TripPinRESTierService/(S(miemz3v3blexv3n23th5mzju))/People('russellwhyte')?$expand=Friends($filter=UserName eq 'scottketchum')
```
- api:
```
.expand(
    {
        link: People.Friends,
        filter: Peopele.UserName.equal('scottketchum')
    }
)
```
#### expand recursive
- example of reference service: 
```
https://services.odata.org/TripPinRESTierService/(S(miemz3v3blexv3n23th5mzju))/People('russellwhyte')?$select=UserName&$expand=Friends($expand=Friends)
```
- api:
```
.expand(
    {
        link: People.Friends,
        expand: Peopele.Friends
    }
)
```


