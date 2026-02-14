# Change Log

This file lists all the changes according to the different versions.

## 1.2.0 - Feb25 - Data Update & New Features (06.02.2025)

### Data Updates

- Updated all population data to **RGPH-5 2023** (5th General Census)
- National population: 18,126,390 inhabitants
- Added population and area data for all 46 departments
- Fixed region name "Thies" → "Thiès"

### New Features

- **Telecom Operators**: Added Orange, Free, Expresso, Promobile with `operateurs()`, `findOperateurByNumber()`
- **Search**: Global search with `search()`, `findByCode()`
- **Calculations**: `totalPopulation()`, `totalSuperficie()`, `density()`, `nationalDensity()`
- **Filters**: `regionsByPopulation()`, `regionsBySuperficie()`, `regionsByDensity()`, `departmentsByPopulation()`, `departmentsByRegion()`
- **Random**: `randomRegion()`, `randomDepartment()`

### New Data Files

- `operateurs.json` - Telecom operators with prefixes

---

## 1.0.0 - Jan23 [BETA] - First Release [PUBLIC] (13.01.2023)

- Every feature added.

### 0.5.0 - Oct22 [BETA] - [PRIVATE] (04.10.2022)

- Every feature added.

#### Unreleased (22.09.2022)

- Beginning
