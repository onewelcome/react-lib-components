import { useFormSelector } from './useFormSelector';
import { renderHook } from '@testing-library/react-hooks';

describe('we should get the correct return values and describedBy is the same as identifier', () => {
  it('should return correct values', () => {
    const { result } = renderHook(() =>
      useFormSelector({
        name: 'test',
        errorMessage: 'errormessage',
        error: false,
        parentErrorId: 'parenterrorid',
        helperText: 'helpertext',
        parentHelperId: 'parenthelperid',
      })
    );

    expect(result.current.describedBy).toHaveLength(15);
    expect(result.current.errorId).toHaveLength(15);
    expect(result.current.identifier).toHaveLength(15);

    expect(result.current.describedBy).toBe(result.current.identifier);
  });
});

describe('describedBy should be the parenterrorid', () => {
  it('should be linked correctly', () => {
    const { result } = renderHook(() =>
      useFormSelector({
        name: 'test',
        errorMessage: 'errormessage',
        error: true,
        parentErrorId: 'parenterrorid',
        helperText: 'helpertext',
        parentHelperId: 'parenthelperid',
      })
    );

    expect(result.current.describedBy).toBe('parenterrorid');
  });
});
