import React, {useState} from 'react'
import { Header, Dropdown } from 'semantic-ui-react'
import { ChartWrapper, DisplayedChartStyled, DropdownWrapper, TitleWrapper } from './DisplayedChartStyled'
import D3Charts from '../D3'

// add imported library objects to charts
const charts = {
  d3: D3Charts,
  chartjs: null,
  googleCharts: null
}

const libraries = [
  { key: 'chartjs', text: 'Chartjs', value: 'chartjs' },
  { key: 'd3', text: 'D3', value: 'd3' },
  { key: 'google-charts', text: 'Google Charts', value: 'Google Charts' }
]

const types = [
  { key: 'bar', text: ' bar', value: 'bar' },
  { key: 'radial', text: ' radial', value: 'radial' },
  { key: 'tree', text: ' tree', value: 'tree' },
  { key: 'scatterplot', text: ' scatterplot', value: 'scatterplot' },
  { key: 'pie', text: ' pie', value: 'pie' }
]

/**
 * charts will be displayed based on selectedChartType and selectedLibrary
 * @param selectedLibrary string
 * @param selectedChartType string
 */


const DisplayedChart = () => {

  const [selectedLibrary, setSelectedLibrary] = useState("d3");
  const [isLibraryMenuOpen, setIsLibraryMenuOpen] = useState(false);

  const [selectedChartType, setSelectedChartType] = useState("bar");
  const [isChartMenuOpen, setIsChartMenuOpen] = useState(false);

  const handleLibraryClick = () => {
    setIsLibraryMenuOpen(!isLibraryMenuOpen);
    setIsChartMenuOpen(false)
  }

  const handleChartClick = () => {
    setIsChartMenuOpen(!isChartMenuOpen)
    setIsLibraryMenuOpen(false)
  }

  const onLibrarySelect = (e, { value }) => {
    // console.log("selected", value)
    setSelectedLibrary(value);
    setIsLibraryMenuOpen(false)
  }

  const onChartSelect = (e, { value }) => {
    setSelectedChartType(value);
    setIsChartMenuOpen(false)
  }

  const onLibraryClick = () => {
    console.log("clicked")
    // setSelectedLibrary(value)
    setIsLibraryMenuOpen(false)
  }

  return (
    <DisplayedChartStyled>
      <TitleWrapper>
        
        <div>
          <span
            onClick={handleLibraryClick}
            className="libraryOptions"
          >
            {selectedLibrary}
          </span>
          <span>  {" "} ::: {" "} </span>
          <span
            onClick={handleChartClick}
            className="chartOptions"
          >
            {selectedChartType}
          </span>
        </div>

        {isLibraryMenuOpen && <DropdownWrapper>
          <Dropdown
            value={selectedLibrary}
            open={true}
            fluid
            selection
            options={libraries.filter(library => library.value !== selectedLibrary)}
            // onMouseDown={onLibrarySelect}
            onChange={onLibrarySelect}
          />
        </DropdownWrapper>}
        
        {isChartMenuOpen && <DropdownWrapper>
          <Dropdown
            value={selectedChartType}
            open={true}
            fluid
            selection
            options={types.filter(type => type.value !== selectedChartType)}
            onChange={onChartSelect}
          />
        </DropdownWrapper>
        }
      </TitleWrapper>

      <ChartWrapper>
        {charts[selectedLibrary] &&
        charts[selectedLibrary][selectedChartType] ? (
          charts[selectedLibrary][selectedChartType]
        ) : (
          <h1>no chart found</h1>
        )}
      </ChartWrapper>
    </DisplayedChartStyled>
  )
}

export default DisplayedChart
