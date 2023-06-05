import re
from pathlib import Path

pattern = r'sidebar_position:\s*(\d+)'

def replace_func(match):
    num = int(match.group(1))
    return f'sidebar_position: {num + 1}'

def update_positions():
    """
    Bumps sidebar position numbers in all release files in preparation for 
    addition of the latest release.
    """
    paths = list(Path('.').rglob('*.md'))
    print('updating position numbers . . .')
    for path in paths:
        print(path)
        with open(path, 'r') as file:
            content = file.read()
            updated_content = re.sub(pattern, replace_func, content)
        with open(path, 'w') as file:
            file.write(updated_content)
    print('done!')

if __name__ == '__main__':
    update_positions()