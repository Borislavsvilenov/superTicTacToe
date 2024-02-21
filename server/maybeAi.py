import random

# Define the matchboxes for super tic-tac-toe
matchboxes = {
    # Example matchbox for empty super grid
    ((0, 0, 0), (0, 0, 0), (0, 0, 0)): [(0, 0), (0, 1), (0, 2), (1, 0), (1, 1), (1, 2), (2, 0), (2, 1), (2, 2)]
    # Add more matchboxes for other super grid configurations
}

# Function to get available moves based on current board state
def get_available_moves(super_grid):
    available_moves = []
    for i in range(3):
        for j in range(3):
            if super_grid[i][j] == 0:
                for k in range(3):
                    for l in range(3):
                        if super_grid[i][j][k][l] == 0:
                            available_moves.append((i, j, k, l))
    return available_moves

# Function to get the next move based on the current super grid state
def get_next_move(super_grid):
    available_moves = get_available_moves(super_grid)
    possible_moves = matchboxes.get(tuple(tuple(row) for row in super_grid))
    if possible_moves:
        return random.choice(possible_moves)
    else:
        return random.choice(available_moves)

# Function to print the current state of the super grid
def print_super_grid(super_grid):
    print("Current Super Grid:")
    for row in super_grid:
        print(row)

# Function to prompt the user for their move
def get_user_move():
    while True:
        try:
            move = input("Enter your move (row, column, subrow, subcolumn), e.g., '0 0 1 1': ")
            move = tuple(map(int, move.split()))
            if len(move) == 4 and all(0 <= x < 3 for x in move):
                return move
            else:
                print("Invalid move. Please enter four numbers between 0 and 2.")
        except ValueError:
            print("Invalid input. Please enter four integers.")

# Example usage
super_grid = [
    [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0]],
    [[0, 0, 0], [0, 0, 0], [0, 0, 0]]
]

# Simulate a game of super tic-tac-toe
for _ in range(81):  # Assuming a 3x3 super grid with 81 possible moves (3x3x3x3)
    print_super_grid(super_grid)
    move = get_user_move()
    super_grid[move[0]][move[1]][move[2]][move[3]] = -1  # Assume player makes a move
    print_super_grid(super_grid)
    move = get_next_move(super_grid)
    super_grid[move[0]][move[1]][move[2]][move[3]] = 1  # Assume AI makes a move
