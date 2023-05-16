import { createReducer } from '@reduxjs/toolkit';
import { UserData } from '../../interfaces/userData';
import { loginUser, logoutUser, registerUser } from './user.actions';

interface UserState {
  user: UserData | null;
  token: string | null;
  loading: boolean;
  error: string | null;
}

const initialState: UserState = {
  user: null,
  token: null,
  loading: false,
  error: null,
};

export const userReducer = createReducer(initialState, (builder) => {
  builder.addCase(loginUser.pending, (state, action) => {
    state.loading = true;
  }
  );
  builder.addCase(loginUser.fulfilled, (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.token;
  }
  );
  builder.addCase(loginUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string;
  }
  );
  builder.addCase(logoutUser.pending, (state, action) => {
    state.loading = true;
  }
  );
  builder.addCase(logoutUser.fulfilled, (state, action) => {
    state.loading = false;
    state.user = null;
    state.token = null;
  }
  );
  builder.addCase(logoutUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string;
  }
  );
  builder.addCase(registerUser.pending, (state, action) => {
    state.loading = true;
  }
  );
  builder.addCase(registerUser.fulfilled, (state, action) => {
    state.loading = false;
    state.user = action.payload.user;
    state.token = action.payload.token;
  }
  );
  builder.addCase(registerUser.rejected, (state, action) => {
    state.loading = false;
    state.error = action.payload as string;
  }
  );
});
