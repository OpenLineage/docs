import os

def update_positions():
    """
    Bumps sidebar position numbers in all release files in preparation for 
    addition of latest release.
    """
    paths: list = []
    for root, dirs, files in os.walk('.'):
        for file in files:
            if '.md' in file:
                path = os.path.join(root, file)
                paths.append(path)
    print('updating position numbers . . .')
    for path in paths:
        print(path)
        with open(path, 'r') as t:
            str_contents = t.read()
            start = str_contents.find('sidebar') + 17
            stop = start + 2
            current = str_contents[start:stop]
            current_int = int(str_contents[start:stop])
            new_num = ' ' + str(current_int + 1)
            new_contents = str_contents.replace(current, new_num)
        with open(path, 'w') as t:
            new_contents = ''.join(new_contents)
            t.write(new_contents)
    print('done!')

update_positions()