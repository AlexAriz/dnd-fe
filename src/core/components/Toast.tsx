import Alert, { type AlertColor } from "@mui/material/Alert";
import Snackbar from "@mui/material/Snackbar";

interface ToastProps extends React.PropsWithChildren {
  isOpen: boolean;
  onClose: VoidFunction;
  severity: AlertColor;
}
function Toast({ isOpen, onClose, severity, children }: ToastProps) {
  return (
    <Snackbar autoHideDuration={5000} open={isOpen} onClose={onClose}>
      <Alert onClose={onClose} severity={severity} variant="filled">
        {children}
      </Alert>
    </Snackbar>
  );
}

export default Toast;
