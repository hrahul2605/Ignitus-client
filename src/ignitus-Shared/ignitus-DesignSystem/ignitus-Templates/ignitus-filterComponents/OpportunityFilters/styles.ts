import styled from '@emotion/styled';

import {flexibleRowDiv, flexibleColDiv} from '../../../shared';
import {Card} from '../../../ignitus-Atoms/atoms';
import {White, IgnitusBlue, Grey1, Grey2} from '../../../ignitus-Atoms/colors';
import {MD, Normal} from '../../../ignitus-Atoms/fonts';

import Icon from '../../../../ignitus-Utilities/Components/icon';
import DefaultButtonWithIcon from '../../../ignitus-Atoms/ignitus-defaultButtonWithIcon/Components/defaultButtonWithIcon';

export const FilterContainer = styled(Card)`
  border-radius: 16px;
  box-shadow: 0 3px 6px rgba(0, 0, 0, 0.05);
  padding: 1rem;
`;

export const RoundedDefaultButtonWithIcon = styled(DefaultButtonWithIcon)`
  border-radius: 2rem;
`;

export const TopContainer = styled(flexibleColDiv)`
  align-items: flex-start;
`;
export const SelectedFiltersContainer = styled(flexibleRowDiv)``;
export const SelectedFilters = styled.div``;

export const FilterItemsContainer = styled.div`
  padding-right: 1.5rem;
  display: block;
  width: 100%;
`;

export const OptionSelector = styled.div`
  display: none;
  background-color: ${White};
  box-shadow: 0px 1px 5px rgba(0, 0, 0, 0.25);
`;

export const Option = styled.div`
  &:hover {
    cursor: pointer;
    background-color: ${IgnitusBlue};
    p {
      color: ${White};
    }
  }
`;

export const OptionText = styled.p`
  padding: 1rem;
  font-size: ${MD};
  margin: 0;
  font-weight: ${Normal};
  color: ${IgnitusBlue};
`;

export const ButtonDropDownContainer = styled(flexibleColDiv)`
  &:hover {
    div {
      display: block;
    }
  }
`;

export const InputContainer = styled.input`
  background: transparent;
  border: none;
  color: ${IgnitusBlue};
  padding: 0.5rem;
  outline: none;
  width: 95%;
`;

export const CrossIcon = styled(Icon)``;

export const SearchIcon = styled(Icon)`
  fill: ${Grey1};
  height: 1.5rem;
  width: 1.5rem;
`;

export const TagsBarContainer = styled.div`
  display: flex;
  min-height: 50px;
`;

export const SearchBarContainer = styled.div`
  padding: 0.5rem;
  display: flex;
  & > svg {
    float: right;
    margin-top: 0.5rem;
  }
`;

export const BottomContainer = styled(flexibleRowDiv)`
  align-items: flex-start;
`;

export const DashedLineContainer = styled.hr`
  border-top: 2px dashed ${Grey2};
`;
