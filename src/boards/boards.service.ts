import { Injectable, NotFoundException } from '@nestjs/common';
import { BoardStatus } from './board.status.enum';
import { v4 as uuidv4 } from 'uuid';
import type { CreateBoardDto } from './dto/create-board.dto';

@Injectable()
export class BoardsService {
  // getAllBoards(): Board[] {
  //   return this.boards;
  // }
  // createBoard(createBoardDto: CreateBoardDto) {
  //   const { title, description } = createBoardDto;
  //   const board: Board = {
  //     id: uuidv4(),
  //     title,
  //     description,
  //     status: BoardStatus.PUBLIC,
  //   };
  //   this.boards.push(board);
  //   return board;
  // }
  // getBoardById(id: string): Board {
  //   const found = this.boards.find((board) => board.id === id);
  //   if (!found) {
  //     throw new NotFoundException('Board not found');
  //   }
  //   return found;
  // }
  // deleteBoard(id: string): void {
  //   const found = this.getBoardById(id);
  //   this.boards = this.boards.filter((board) => board.id !== found.id);
  // }
  // updateBoardStatus(id: string, status: BoardStatus): Board | undefined {
  //   const board = this.getBoardById(id);
  //   if (!board) {
  //     return undefined;
  //   }
  //   board.status = status;
  //   return board;
  // }
}
